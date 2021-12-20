import { createSlice } from '@reduxjs/toolkit';

export const commentsReducer = createSlice({
    name: 'commentsReducer',
    initialState: {
        loadingComments: false,
        errorComments: '',
    },
    reducers: {
        sendNewCommentStart: (state) => {
            state.loadingComments = true;
        },
        sendNewCommentSuccess: (state) => {
            state.loadingComments = false;
        },
        sendNewCommentFailure: (state, action) => {
            state.loadingComments = false;
            state.errorComments = action.payload;
        },
        changeCommentStart: (state) => {
            state.loadingComments = true;
        },
        changeCommentSuccess: (state) => {
            state.loadingComments = false;
        },
        changeCommentFailure: (state, action) => {
            state.loadingComments = false;
            state.errorComments = action.payload;
        },
        deleteCommentStart: (state) => {
            state.loadingComments = true;
        },
        deleteCommentSuccess: (state) => {
            state.loadingComments = false;
        },
        deleteCommentFailure: (state, action) => {
            state.loadingComments = false;
            state.errorComments = action.payload;
        },
        removeError: (state) => {
            state.errorComments = '';
        },
    },
});

export const {
    sendNewCommentStart,
    sendNewCommentSuccess,
    sendNewCommentFailure,
    changeCommentStart,
    changeCommentSuccess,
    changeCommentFailure,
    deleteCommentStart,
    deleteCommentSuccess,
    deleteCommentFailure,
    removeError,
} = commentsReducer.actions;
