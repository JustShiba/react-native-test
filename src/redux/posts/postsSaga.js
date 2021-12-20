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
    updateAllPostsStart,
    updateAllPostsFinish,
    getAllPostsStart,
    postAddCommentFinish,
} from './postsReducer';
import { addNamesToPosts } from './addNamesToPosts';
import { getUserStart, updateUserPostStart } from '../users/usersReducer';
import { localStore } from '../../secureStore/secureStore';
import { USER__ID } from '../constances/constances';

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
    const { newPostTitle, newPostBody, postId, path } = args.payload;

    try {
        const response = yield call(apiCall, [
            `put`,
            `posts/${postId}`,
            { title: newPostTitle, body: newPostBody },
        ]);

        if (response.status === 200) {
            yield put(changePostSuccess());
            if (path === 'user') yield put(updateUserPostStart(response.data));
            else yield put(updateAllPostsStart(response.data));
        }
    } catch (error) {
        yield put(changePostFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* deletePostSaga(args) {
    try {
        const response = yield call(apiCall, [`delete`, `posts/${args.payload.postId}`]);

        if (response.status === 200) {
            yield put(deletePostSuccess());
            if (args.payload.path === 'user') {
                const userId = yield localStore('get', USER__ID);
                yield put(getUserStart(userId));
            } else yield put(getAllPostsStart());
        }
    } catch (error) {
        yield put(deletePostFailure(error.message));
        yield delay(3000);
        yield put(removeError());
    }
}

export function* updateAllPostsSaga(args) {
    const { allPosts } = yield select((state) => state.posts);
    for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].postId === args.payload.postId)
            yield put(updateAllPostsFinish({ index: i, post: args.payload }));
    }
}

export function* addPostsCommentSaga(args) {
    const posts = yield select((state) => state.posts.allPosts);
    const { postId, comment } = args.payload;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].postId === postId) yield put(postAddCommentFinish({ index: i, comment }));
    }
}
