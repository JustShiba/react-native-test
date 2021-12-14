import { select, call, put } from 'redux-saga/effects';

import { apiCall } from '../../services/service';
import {
    getUserSuccess,
    getUserFailure,
    getAllUsersSuccess,
    getAllUsersFailure,
} from './usersReducer';

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
