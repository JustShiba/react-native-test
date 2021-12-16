import { select, call, put } from 'redux-saga/effects';

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
} from './usersReducer';
import { localStore } from '../../secureStore/secureStore'
import { USER__ID } from '../constances/constances';

export function* getUserSaga() {
    const { selectedUserId } = yield select((state) => state.users);
    try {
        const response = yield call(apiCall, [`get`, `users/${selectedUserId}`]);

        if (response.status === 200) {
            yield put(getUserSuccess(response.data));
        }
    } catch (error) {
        yield put(getUserFailure(error.message));
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
    }
}

export function* deleteUserSaga() {
    const { selectedUserId } = yield select((state) => state.users);
    try {
        const response = yield call(apiCall, [`delete`, `users/${selectedUserId}`]);

        if (response.status === 200) {
            yield put(deleteUserSuccess());
        }
    } catch (error) {
        yield put(deleteUserFailure(error.message));
    }
}

export function* changeUserDataSaga() {
    const { selectedUserId } = yield select((state) => state.users);
    const { userInputInformation } = yield select((state) => state.users);
    try {
        const response = yield call(apiCall, [`patch`, `users/${selectedUserId}`, userInputInformation]);

        if (response.status === 200) {
            yield put(changeUserDataSuccess());
        }
    } catch (error) {
        yield put(changeUserDataFailure(error.message));
    }
}