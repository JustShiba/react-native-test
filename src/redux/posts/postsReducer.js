import { createSlice } from '@reduxjs/toolkit';

export const postsReducer = createSlice({
    name: 'postsReducer',
    initialState: {
        inputPostsInformation: {
            title: '',
            body: '',
            postId: '',
        },
        allPosts: [],
        loadingPosts: false,
        errorPosts: {
            errorPostsText: '',
            isErrorPosts: false,
        },
    },
    reducers: {
        getAllPostsStart: (state) => {
            state.loadingPosts = true;
        },
        getAllPostsSuccess: (state, action) => {
            state.loadingPosts = false;
            state.allPosts = action.payload;
        },
        getAllPostsFailure: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts.isErrorPosts = true;
            state.errorPosts.errorPostsText = action.payload;
        },
        sendNewPostStart: (state, action) => {
            state.loadingPosts = true;
            state.inputPostsInformation.title = action.payload.postTitleAddPost;
            state.inputPostsInformation.body = action.payload.postBodyAddPost;
        },
        sendNewPostSuccess: (state) => {
            state.loadingPosts = false;
            state.inputPostsInformation.title = '';
            state.inputPostsInformation.body = '';
        },
        sendNewPostFailure: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts.isErrorPosts = true;
            state.errorPosts.errorPostsText = action.payload;
        },
        changePostStart: (state, action) => {
            state.loadingPosts = true;
            state.inputPostsInformation.title = action.payload.newPostTitle;
            state.inputPostsInformation.body = action.payload.newPostBody;
            state.inputPostsInformation.postId = action.payload.postId;
        },
        changePostSuccess: (state) => {
            state.loadingPosts = false;
            state.inputPostsInformation.title = '';
            state.inputPostsInformation.body = '';
            state.inputPostsInformation.postId = '';
        },
        changePostFailure: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts.isErrorPosts = true;
            state.errorPosts.errorPostsText = action.payload;
        },
        deletePostStart: (state, action) => {
            state.loadingPosts = true;
            state.inputPostsInformation.postId = action.payload;
        },
        deletePostSuccess: (state) => {
            state.loadingPosts = false;
            state.inputPostsInformation.postId = '';
        },
        deletePostFailure: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts.isErrorPosts = true;
            state.errorPosts.errorPostsText = action.payload;
        },
        removeError: (state) => {
            state.errorPosts.isErrorPosts = false;
            state.errorPosts.errorPostsText = '';
        },
    },
});

export const {
    sendNewPostStart,
    sendNewPostSuccess,
    sendNewPostFailure,
    getAllPostsStart,
    getAllPostsSuccess,
    getAllPostsFailure,
    changePostStart,
    changePostSuccess,
    changePostFailure,
    deletePostStart,
    deletePostSuccess,
    deletePostFailure,
    removeError,
} = postsReducer.actions;
