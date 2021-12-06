import { takeEvery, all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([yield takeEvery(checkLogInStart, checkLogIn)]);
}
