import { createSlice } from '@reduxjs/toolkit';

export const postsReducer = createSlice({
    name: 'postsReducer',
    initialState: {
        inputPostsInformation: {
            title: '',
            body: '',
        },
        allPosts: [],
        loadingPosts: false,
        errorPosts: {
            errorPostsText: '',
            isError: false,
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
            state.errorPosts.errorPostsText = action.payload;
            state.errorPosts.isError = true;
        },
        sendNewPostStart: (state, action) => {
            state.loadingPosts = true;
            state.inputPostsInformation.title = action.payload.postTitleAddPost;
            state.inputPostsInformation.body = action.payload.postBodyAddPost;
        },
        sendNewPostSuccess: (state) => {
            state.loadingPosts = false;
            state.inputPostsInformation = '';
        },
        sendNewPostFailure: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts.errorPostsText = action.payload;
            state.errorPosts.isError = true;
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
} = postsReducer.actions;
