import { put, select, call, delay } from 'redux-saga/effects';

import { apiCall } from '../../services/service';
import {
    changePostSuccess,
    changePostFailure,
    getAllPostsSuccess,
    getAllPostsFailure,
    sendNewPostSuccess,
    sendNewPostFailure,
    deletePostSuccess,
    deletePostFailure,
    removeError,
} from './postsReducer';
import { addNamesToPosts } from './addNamesToPosts';

export function* sendPostSaga(args) {
    const { postTitleAddPost, postBodyAddPost } = args.payload;

    try {
        const response = yield call(apiCall, [
            `post`,
            `posts`,
            { title: postTitleAddPost, body: postBodyAddPost },
        ]);

        if (response.status === 200) {
            yield put(sendNewPostSuccess());
        }
    } catch (error) {
        yield put(sendNewPostFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* getAllPostsSaga() {
    try {
        const response = yield call(apiCall, [`get`, `posts`]);

        if (response.status === 200) {
            const { allUsers } = yield select((state) => state.users);
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].nickname = addNamesToPosts(allUsers, response.data[i].userId);
            }
            yield put(getAllPostsSuccess(response.data));
        }
    } catch (error) {
        yield put(getAllPostsFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* changePostSaga(args) {
    const { newPostTitle, newPostBody, postId } = args.payload;

    try {
        const response = yield call(apiCall, [
            `put`,
            `posts/${postId}`,
            { title: newPostTitle, body: newPostBody },
        ]);

        if (response.status === 200) {
            yield put(changePostSuccess());
        }
    } catch (error) {
        yield put(changePostFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* deletePostSaga(args) {
    try {
        const response = yield call(apiCall, [`delete`, `posts/${args.payload}`]);

        if (response.status === 200) {
            yield put(deletePostSuccess());
        }
    } catch (error) {
        yield put(deletePostFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}
