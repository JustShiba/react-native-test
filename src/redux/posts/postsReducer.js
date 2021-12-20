import { createSlice } from '@reduxjs/toolkit';

export const postsReducer = createSlice({
    name: 'postsReducer',
    initialState: {
        allPosts: [],
        loadingPosts: false,
        errorPosts: '',
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
            state.errorPosts = action.payload;
        },
        sendNewPostStart: (state) => {
            state.loadingPosts = true;
        },
        sendNewPostSuccess: (state) => {
            state.loadingPosts = false;
        },
        sendNewPostFailure: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts = action.payload;
        },
        changePostStart: (state) => {
            state.loadingPosts = true;
        },
        changePostSuccess: (state) => {
            state.loadingPosts = false;
        },
        changePostFailure: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts = action.payload;
        },
        deletePostStart: (state) => {
            state.loadingPosts = true;
        },
        deletePostSuccess: (state) => {
            state.loadingPosts = false;
        },
        deletePostFailure: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts = action.payload;
        },
        removeError: (state) => {
            state.errorPosts = '';
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
