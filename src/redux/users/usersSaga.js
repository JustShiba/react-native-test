import { call, put, delay, select } from 'redux-saga/effects';

import { apiCall } from '../../services/service';
import { logout } from '../authorization/authorizationReducer';
import {
    getUserSuccess,
    getUserFailure,
    getAllUsersSuccess,
    getAllUsersFailure,
    deleteUserSuccess,
    deleteUserFailure,
    changeUserDataSuccess,
    changeUserDataFailure,
    removeError,
    updateUserPostFinish,
    userAddCommentFinish,
} from './usersReducer';

export function* getUserSaga(args) {
    try {
        const response = yield call(apiCall, [`get`, `users/${args.payload}`]);

        if (response.status === 200) {
            yield put(getUserSuccess(response.data));
        }
    } catch (error) {
        yield put(getUserFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* getAllUsersSaga() {
    try {
        const response = yield call(apiCall, [`get`, `users`]);

        if (response.status === 200) {
            yield put(getAllUsersSuccess(response.data));
        }
    } catch (error) {
        put(getAllUsersFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* deleteUserSaga(args) {
    try {
        const response = yield call(apiCall, [`delete`, `users/${args.payload}`]);

        if (response.status === 200) {
            yield put(deleteUserSuccess());
            yield put(logout());
        }
    } catch (error) {
        yield put(deleteUserFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* changeUserDataSaga(args) {
    const { newNickname, newPhone, currentUserId } = args.payload;
    try {
        const response = yield call(apiCall, [
            `patch`,
            `users/${currentUserId}`,
            { nickname: newNickname, phone: newPhone },
        ]);

        if (response.status === 200) {
            yield put(changeUserDataSuccess(response.data));
        }
    } catch (error) {
        yield put(changeUserDataFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* updateUserPostSaga(args) {
    const { posts } = yield select((state) => state.users.currentUserInformation);
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].postId === args.payload.postId)
            yield put(updateUserPostFinish({ index: i, post: args.payload }));
    }
}

export function* addUserCommentSaga(args) {
    const { posts } = yield select((state) => state.users.currentUserInformation);
    const { postId, comment } = args.payload;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].postId === postId) yield put(userAddCommentFinish({ index: i, comment }));
    }
}
