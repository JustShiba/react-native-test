import { call, delay, put, take } from 'redux-saga/effects';

import { apiCall } from '../../services/service';
import {
    postAddCommentStart,
    postChangeCommentStart,
    postDeleteCommentStart,
} from '../posts/postsReducer';
import {
    userAddCommentStart,
    userChangeCommentStart,
    userDeleteCommentStart,
} from '../users/usersReducer';
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
    const { addCommentText, postId, path } = args.payload;

    try {
        const response = yield call(apiCall, [
            `post`,
            `posts/${postId}/comments`,
            { body: addCommentText },
        ]);
        if (response.status === 200) {
            yield put(sendNewCommentSuccess());
            if (path === 'user') {
                yield put(userAddCommentStart({ postId, comment: response.data }));
            } else yield put(postAddCommentStart({ postId, comment: response.data }));
        }
    } catch (error) {
        yield put(sendNewCommentFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* changeCommentSaga(args) {
    const { changeComment, postId, commentId, path } = args.payload;

    try {
        const response = yield call(apiCall, [
            `put`,
            `posts/${postId}/comments/${commentId}`,
            { body: changeComment },
        ]);
        if (response.status === 200) {
            yield put(changeCommentSuccess());
            if (path === 'user')
                yield put(userChangeCommentStart({ data: response.data, postId, commentId }));
            else yield put(postChangeCommentStart({ data: response.data, postId, commentId }));
        }
    } catch (error) {
        yield put(changeCommentFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* deleteCommentSaga(args) {
    const { postId, commentId, path } = args.payload;

    try {
        // const response = yield call(apiCall, [`delete`, `posts/${postId}/comments/${commentId}`]);
        if (true) {
            yield put(deleteCommentSuccess());
            if (path === 'user') yield put(userDeleteCommentStart({ postId, commentId }));
            else yield put(postDeleteCommentStart({ postId, commentId }));
        }
    } catch (error) {
        yield put(deleteCommentFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}
