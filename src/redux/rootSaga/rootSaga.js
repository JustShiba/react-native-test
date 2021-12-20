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
import {
    changeCommentStart,
    deleteCommentStart,
    sendNewCommentStart,
} from '../comments/commentsReducer';
import { changeCommentSaga, deleteCommentSaga, sendNewCommentSaga } from '../comments/commentsSaga';
import {
    changePostStart,
    deletePostStart,
    getAllPostsStart,
    postAddCommentStart,
    sendNewPostStart,
    updateAllPostsStart,
} from '../posts/postsReducer';
import {
    addPostsCommentSaga,
    changePostSaga,
    deletePostSaga,
    getAllPostsSaga,
    sendPostSaga,
    updateAllPostsSaga,
} from '../posts/postsSaga';
import {
    changeUserDataStart,
    deleteUserStart,
    getAllUsersStart,
    getUserStart,
    updateUserPostStart,
    userAddCommentStart,
} from '../users/usersReducer';
import {
    addUserCommentSaga,
    changeUserDataSaga,
    deleteUserSaga,
    getAllUsersSaga,
    getUserSaga,
    updateUserPostSaga,
} from '../users/usersSaga';

export default function* rootSaga() {
    yield all([
        yield takeEvery(checkLoginStart, checkLoginSaga),
        yield takeEvery(loginStart, loginSaga),
        yield takeEvery(signupStart, signupSaga),
        yield takeLatest(getUserStart, getUserSaga),
        yield takeEvery(sendNewPostStart, sendPostSaga),
        yield takeEvery(getAllUsersStart, getAllUsersSaga),
        yield takeEvery(getAllPostsStart, getAllPostsSaga),
        yield takeEvery(sendNewCommentStart, sendNewCommentSaga),
        yield takeEvery(changeCommentStart, changeCommentSaga),
        yield takeEvery(deleteCommentStart, deleteCommentSaga),
        yield takeEvery(changePostStart, changePostSaga),
        yield takeEvery(deletePostStart, deletePostSaga),
        yield takeEvery(deleteUserStart, deleteUserSaga),
        yield takeEvery(changeUserDataStart, changeUserDataSaga),
        yield takeEvery(logout, logoutSaga),
        yield takeEvery(updateUserPostStart, updateUserPostSaga),
        yield takeEvery(updateAllPostsStart, updateAllPostsSaga),
        yield takeEvery(userAddCommentStart, addUserCommentSaga),
        yield takeEvery(postAddCommentStart, addPostsCommentSaga),
    ]);
}
