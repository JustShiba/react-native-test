import { call, put, delay } from 'redux-saga/effects';

import { localStore } from '../../secureStore/secureStore';
import { apiCall } from '../../services/service';
import { USER__ID, USER__TOKEN } from '../constances/constances';
import {
    checkLoginFinish,
    loginFailure,
    loginSuccess,
    removeError,
    signupFailure,
    signupSuccess,
} from './authorizationReducer';

export function* checkLoginSaga() {
    const userId = yield localStore('get', USER__ID);

    try {
        const response = yield call(apiCall, [`get`, `users/${userId}`]);
        if (response.status === 200) {
            yield put(checkLoginFinish(true));
        }
    } catch (error) {
        yield put(checkLoginFinish(false));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* loginSaga(args) {
    yield put(loginSuccess());
}

export function* signupSaga(args) {
    const { userEmail, userPassword } = args.payload;

    try {
        const response = yield call(apiCall, [
            `post`,
            `signup`,
            { email: userEmail, password: userPassword },
        ]);

        if (response.status === 200) {
            yield put(signupSuccess(response.data));
        }
    } catch (error) {
        yield put(signupFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* logoutSaga() {
    localStore('remove', USER__ID);
    localStore('remove', USER__TOKEN);
}
