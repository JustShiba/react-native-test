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
        updateAllPostsStart: (state) => {
            state.loadingPosts = true;
        },
        updateAllPostsFinish: (state, action) => {
            state.loadingPosts = false;
            const { index, post } = action.payload;
            state.allPosts[index] = post;
        },
        postAddCommentStart: () => {},
        postAddCommentFinish: (state, action) => {
            state.allPosts[action.payload.index].comments = [
                ...state.allPosts[action.payload.index].comments,
                action.payload.comment,
            ];
        },
        postChangeCommentStart: () => {},
        postChangeCommentFinish: (state, action) => {
            const { comment, postIndex, commentIndex } = action.payload;
            state.allPosts[postIndex].comments[commentIndex] = comment;
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
    updateAllPostsStart,
    updateAllPostsFinish,
    postAddCommentStart,
    postAddCommentFinish,
    postChangeCommentStart,
    postChangeCommentFinish,
} = postsReducer.actions;
