import { select, call, put } from 'redux-saga/effects';

import { apiCall } from '../../services/service';
import { getUserFailure, getUserSuccess } from './usersReducer';

export function* getUserSaga() {
    const { selectedUserId } = yield select(state => state.users)
    try {
        const response = yield call(apiCall, [`get`, `users/${selectedUserId}`]);

        if (response.status === 200) {
            yield put(getUserSuccess(response.data))
        }
    } catch (error) {
        yield put(getUserFailure(error.message))
    }
}