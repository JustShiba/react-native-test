import { takeEvery, all } from 'redux-saga/effects';
import { checkLogInStart } from '../authorization/authorizationReducer';
import { checkLogIn } from '../authorization/authorizationSaga';

export default function* rootSaga() {
    yield all([yield takeEvery(checkLogInStart, checkLogIn)]);
}
