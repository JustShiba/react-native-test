import { call, delay, put } from 'redux-saga/effects';

import { apiCall } from '../../services/service';
import {
    changeCommentFailure,
    changeCommentSuccess,
    deleteCommentFailure,
    deleteCommentSuccess,
    removeError,
    sendNewCommentFailure,
    sendNewCommentSuccess,
} from './commentsReducer';

export function* sendNewCommentSaga(args) {
    const { addCommentText, postId } = args.payload;

    try {
        const response = yield call(apiCall, [
            `post`,
            `posts/${postId}/comments`,
            { body: addCommentText },
        ]);
        if (response.status === 200) {
            yield put(sendNewCommentSuccess());
        }
    } catch (error) {
        yield put(sendNewCommentFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* changeCommentSaga(args) {
    const { changeComment, postId, commentId } = args.payload;

    try {
        const response = yield call(apiCall, [
            `put`,
            `posts/${postId}/comments/${commentId}`,
            { body: changeComment },
        ]);
        if (response.status === 200) {
            yield put(changeCommentSuccess());
        }
    } catch (error) {
        yield put(changeCommentFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* deleteCommentSaga(args) {
    const { postId, commentId } = args.payload;

    try {
        const response = yield call(apiCall, [`delete`, `posts/${postId}/comments/${commentId}`]);
        if (response.status === 200) {
            yield put(deleteCommentSuccess());
        }
    } catch (error) {
        yield put(deleteCommentFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}
