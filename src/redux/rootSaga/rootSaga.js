import { takeEvery, all } from 'redux-saga/effects';
import { checkLoginStart, loginStart, signupStart } from '../authorization/authorizationReducer';
import { checkLoginSaga, loginSaga, signupSaga } from '../authorization/authorizationSaga';
import { getUserStart } from '../users/usersReducer';
import { getUserSaga } from '../users/usersSaga';

export default function* rootSaga() {
    yield all([
        yield takeEvery(checkLoginStart, checkLoginSaga),
        yield takeEvery(loginStart, loginSaga),
        yield takeEvery(signupStart, signupSaga),
        yield takeEvery(getUserStart, getUserSaga),
    ]);
}
