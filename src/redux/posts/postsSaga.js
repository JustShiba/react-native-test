import { apiCall } from '../../services/service';
import { put, select, call } from 'redux-saga/effects';

import {
    getAllPostsFailure,
    getAllPostsSuccess,
    sendNewPostFailure,
    sendNewPostSuccess,
} from './postsReducer';
import { addNamesToPosts } from './addNamesToPosts';

export function* sendPostSaga() {
    const { inputPostsInformation } = yield select((state) => state.posts);
    try {
        const response = yield call(apiCall, [`post`, `posts`, inputPostsInformation]);

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
