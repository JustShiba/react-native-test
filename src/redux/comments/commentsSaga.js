import { call, put, select } from "redux-saga/effects";
import { apiCall } from "../../services/service";
import { changeCommentFailure, changeCommentSuccess, deleteCommentFailure, deleteCommentSuccess, sendNewCommentFailure, sendNewCommentSuccess } from "./commentsReducer";

export function* sendNewCommentSaga() {
    const { body, postId } = yield select(state => state.comments.inputCommentInformation);

    try {
        const response = yield call(apiCall, [`post`, `posts/${postId}/comments`, { body: body }]);
        if (response.status === 200) {
            yield put(sendNewCommentSuccess());
        }
    } catch (error) {
        yield put(sendNewCommentFailure(error.message));
    }
}

export function* changeCommentSaga() {
    const { body, postId, commentId } = yield select(state => state.comments.inputCommentInformation);
    try {
        const response = yield call(apiCall, [`put`, `posts/${postId}/comments/${commentId}`, { body: body }]);
        if (response.status === 200) {
            yield put(changeCommentSuccess());
        }
    } catch (error) {
        yield put(changeCommentFailure(error.message))
    }
}

export function* deleteCommentSaga() {
    const { postId, commentId } = yield select(state => state.comments.inputCommentInformation);
    try {
        const response = yield call(apiCall, [`delete`, `posts/${postId}/comments/${commentId}`]);
        if (response.status === 200) {
            yield put(deleteCommentSuccess());
        }
    } catch (error) {
        yield put(deleteCommentFailure(error.message))
    }
}