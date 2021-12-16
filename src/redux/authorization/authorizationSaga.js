import { select, call, put } from 'redux-saga/effects';

import { localStore } from '../../secureStore/secureStore';
import { apiCall } from '../../services/service';
import { USER__ID, USER__TOKEN } from '../constances/constances';
import {
    checkLoginFinish,
    loginFailure,
    loginSuccess,
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
    }
}

export function* loginSaga() {
    const authorizationInformation = yield select(
        (state) => state.authorization.inputUserInformation.userAuthorizationInformation,
    );

    try {
        const response = yield call(apiCall, [`post`, `login`, authorizationInformation]);

        if (response.status === 200) {
            yield put(loginSuccess(response.data));
            localStore('save', USER__ID, response.data.userId);
            localStore('save', USER__TOKEN, response.data.token);
        }
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

export function* signupSaga() {
    const authorizationInformation = yield select(
        (state) => state.authorization.inputUserInformation.userAuthorizationInformation,
    );

    try {
        const response = yield call(apiCall, [`post`, `signup`, authorizationInformation]);

        if (response.status === 200) {
            yield put(signupSuccess(response.data));
        }
    } catch (error) {
        yield put(signupFailure(error.message));
    }
}

export function* logoutSaga() {
    localStore('remove', USER__ID);
    localStore('remove', USER__TOKEN);
}