import { takeEvery, all } from 'redux-saga/effects';

import { checkLoginStart, loginStart, signupStart } from '../authorization/authorizationReducer';
import { checkLoginSaga, loginSaga, signupSaga } from '../authorization/authorizationSaga';
import { getAllPostsStart, sendNewPostStart } from '../posts/postsReducer';
import { getAllPostsSaga, sendPostSaga } from '../posts/postsSaga';
import { getAllUsersStart, getUserStart } from '../users/usersReducer';
import { getAllUsersSaga, getUserSaga } from '../users/usersSaga';

export default function* rootSaga() {
    yield all([
        yield takeEvery(checkLoginStart, checkLoginSaga),
        yield takeEvery(loginStart, loginSaga),
        yield takeEvery(signupStart, signupSaga),
        yield takeEvery(getUserStart, getUserSaga),
        yield takeEvery(sendNewPostStart, sendPostSaga),
        yield takeEvery(getAllUsersStart, getAllUsersSaga),
        yield takeEvery(getAllPostsStart, getAllPostsSaga),
    ]);
}
