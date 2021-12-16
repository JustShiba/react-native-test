import { put, select, call } from 'redux-saga/effects';

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
} from './postsReducer';
import { addNamesToPosts } from './addNamesToPosts';

export function* sendPostSaga() {
    const { title, body } = yield select((state) => state.posts.inputPostsInformation);
    try {
        const response = yield call(apiCall, [`post`, `posts`, { title, body }]);

        if (response.status === 200) {
            yield put(sendNewPostSuccess());
        }
    } catch (error) {
        yield put(sendNewPostFailure(error.message));
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
    }
}

export function* changePostSaga() {
    const { title, body, postId } = yield select(state => state.posts.inputPostsInformation)
    try {
        const response = yield call(apiCall, [`put`, `posts/${postId}`, { title, body }]);

        if (response.status === 200) {
            yield put(changePostSuccess());
        }
    } catch (error) {
        yield put(changePostFailure(error.message));
    }
}

export function* deletePostSaga() {
    const { postId } = yield select(state => state.posts.inputPostsInformation)
    try {
        const response = yield call(apiCall, [`delete`, `posts/${postId}`]);

        if (response.status === 200) {
            yield put(deletePostSuccess());
        }
    } catch (error) {
        yield put(deletePostFailure(error.message));
    }
}