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
    changeUserDataStart,
    deleteUserStart,
    getAllUsersStart,
    getUserStart,
    updateUserPostStart,
    userAddCommentStart,
    userChangeCommentStart,
    userDeleteCommentStart,
} from '../users/usersReducer';
import {
    addUserCommentSaga,
    changeUserCommentSaga,
    changeUserDataSaga,
    deleteUserCommentSaga,
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
        yield takeEvery(getAllUsersStart, getAllUsersSaga),
        yield takeEvery(deleteUserStart, deleteUserSaga),
        yield takeEvery(changeUserDataStart, changeUserDataSaga),
        yield takeEvery(logout, logoutSaga),
        yield takeEvery(updateUserPostStart, updateUserPostSaga),
        yield takeEvery(userAddCommentStart, addUserCommentSaga),
        yield takeEvery(userChangeCommentStart, changeUserCommentSaga),
        yield takeEvery(userDeleteCommentStart, deleteUserCommentSaga),
    ]);
}
