import { select, call, put, delay } from 'redux-saga/effects';

import { apiCall } from '../../services/service';
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
    const { selectedUserId } = yield select((state) => state.users);
    try {
        const response = yield call(apiCall, [`delete`, `users/${args.payload}`]);

        if (response.status === 200) {
            yield put(deleteUserSuccess());
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
            console.log(response);
            yield put(changeUserDataSuccess());
        }
    } catch (error) {
        yield put(changeUserDataFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}
