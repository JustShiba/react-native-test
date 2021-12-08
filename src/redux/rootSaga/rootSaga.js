import { takeEvery, all } from 'redux-saga/effects';
import { loginStart } from '../authorization/authorizationReducer';
import { loginSaga } from '../authorization/authorizationSaga';

export default function* rootSaga() {
    yield all([yield takeEvery(loginStart, loginSaga)]);
}
