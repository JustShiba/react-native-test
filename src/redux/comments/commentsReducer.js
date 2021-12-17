import { createSlice } from '@reduxjs/toolkit';

export const commentsReducer = createSlice({
    name: 'commentsReducer',
    initialState: {
        inputCommentInformation: {
            body: '',
            postId: '',
            commentId: '',
        },
        loadingComments: false,
        errorComments: {
            errorCommentsText: '',
            isErrorComments: false,
        },
    },
    reducers: {
        sendNewCommentStart: (state, action) => {
            state.loadingComments = true;
            state.inputCommentInformation.body = action.payload.addCommentText;
            state.inputCommentInformation.postId = action.payload.postId;
        },
        sendNewCommentSuccess: (state) => {
            state.loadingComments = false;
            state.inputCommentInformation.body = '';
            state.inputCommentInformation.postId = '';
        },
        sendNewCommentFailure: (state, action) => {
            state.loadingComments = false;
            state.errorComments.isErrorComments = true;
            state.errorComments.errorCommentsText = action.payload;
        },
        changeCommentStart: (state, action) => {
            const { changeComment, postId, commentId } = action.payload;
            state.loadingComments = true;
            state.inputCommentInformation.body = changeComment;
            state.inputCommentInformation.postId = postId;
            state.inputCommentInformation.commentId = commentId;
        },
        changeCommentSuccess: (state) => {
            state.loadingComments = false;
            state.inputCommentInformation.body = '';
            state.inputCommentInformation.postId = '';
            state.inputCommentInformation.commentId = '';
        },
        changeCommentFailure: (state, action) => {
            state.loadingComments = false;
            state.errorComments.isErrorComments = true;
            state.errorComments.errorCommentsText = action.payload;
        },
        deleteCommentStart: (state, action) => {
            state.loadingComments = true;
            state.inputCommentInformation.postId = action.payload.postId;
            state.inputCommentInformation.commentId = action.payload.commentId;
        },
        deleteCommentSuccess: (state) => {
            state.loadingComments = false;
            state.inputCommentInformation.postId = '';
            state.inputCommentInformation.commentId = '';
        },
        deleteCommentFailure: (state, action) => {
            state.loadingComments = false;
            state.errorComments.isErrorComments = true;
            state.errorComments.errorCommentsText = action.payload;
            state.inputCommentInformation.postId = '';
            state.inputCommentInformation.commentId = '';
        },
        removeError: (state) => {
            state.errorComments.isErrorComments = false;
            state.errorComments.errorCommentsText = '';
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
