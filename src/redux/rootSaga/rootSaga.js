import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import {
    checkLoginStart,
    loginStart,
    logout,
    signupStart,
} from '../authorization/authorizationReducer';
import {
    checkLoginSaga,
    loginSaga,
    logoutSaga,
    signupSaga,
} from '../authorization/authorizationSaga';


export default function* rootSaga() {
    yield all([
        yield takeEvery(checkLoginStart, checkLoginSaga),
        yield takeEvery(loginStart, loginSaga),
        yield takeEvery(signupStart, signupSaga),
        yield takeEvery(logout, logoutSaga),
    ]);
}
