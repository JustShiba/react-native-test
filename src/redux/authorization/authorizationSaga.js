import { select, call, put } from 'redux-saga/effects';
import { apiCall } from '../../services/service';
import { loginFailure, loginSuccess } from './authorizationReducer';

export function* loginSaga() {
    const authorizationInformation = yield select(
        (state) => state.authorization.userAuthorizationInformation,
    );
    console.log(authorizationInformation);
    try {
        const response = yield call(apiCall, [`post`, `login`, authorizationInformation]);
        if (response.status === 200) {
            yield put(loginSuccess(response.data));
        }
    } catch (error) {
        yield put(loginFailure());
        console.log(error);
    }
}
