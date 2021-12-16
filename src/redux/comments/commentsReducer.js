import { createSlice } from '@reduxjs/toolkit';

export const commentsReducer = createSlice({
    name: 'commentsReducer',
    initialState: {
        inputCommentInformation: {
            body: '',
            postId: '',
            commentId: '',
        },
        errorComments: {
            errorCommentsText: '',
            isError: false,
        },
    },
    reducers: {
        sendNewCommentStart: (state, action) => {
            state.inputCommentInformation.body = action.payload.addCommentText;
            state.inputCommentInformation.postId = action.payload.postId;
        },
        sendNewCommentSuccess: (state) => {
            state.inputCommentInformation.body = '';
            state.inputCommentInformation.postId = '';
        },
        sendNewCommentFailure: (state, action) => {
            state.errorComments.isError = true;
            state.errorComments.errorCommentsText = action.payload;
        },
        changeCommentStart: (state, action) => {
            const { changeComment, postId, commentId } = action.payload
            state.inputCommentInformation.body = changeComment;
            state.inputCommentInformation.postId = postId;
            state.inputCommentInformation.commentId = commentId;
        },
        changeCommentSuccess: (state) => {
            state.inputCommentInformation.body = '';
            state.inputCommentInformation.postId = '';
            state.inputCommentInformation.commentId = '';
        },
        changeCommentFailure: (state, action) => {
            state.errorComments.isError = true;
            state.errorComments.errorCommentsText = action.payload;
        },
        deleteCommentStart: (state, action) => {
            state.inputCommentInformation.postId = action.payload.postId;
            state.inputCommentInformation.commentId = action.payload.commentId;
        },
        deleteCommentSuccess: (state, action) => {
            state.inputCommentInformation.postId = '';
            state.inputCommentInformation.commentId = '';
        },
        deleteCommentFailure: (state, action) => {
            state.errorComments.isError = true;
            state.errorComments.errorCommentsText = action.payload;
            state.inputCommentInformation.postId = '';
            state.inputCommentInformation.commentId = '';
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
} = commentsReducer.actions;
