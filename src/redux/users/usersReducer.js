import { createSlice } from '@reduxjs/toolkit';

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState: {
        currentUserInformation: {},
        allUsers: [],
        loadingUsers: false,
        errorUsers: '',
    },
    reducers: {
        getUserStart: (state) => {
            state.loadingUsers = true;
        },
        getUserSuccess: (state, action) => {
            state.loadingUsers = false;
            state.currentUserInformation = action.payload;
        },
        getUserFailure: (state, action) => {
            state.loadingUsers = false;
            state.errorUsers = action.payload;
        },
        getAllUsersStart: (state) => {
            state.loadingUsers = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.loadingUsers = false;
            state.allUsers = action.payload;
        },
        getAllUsersFailure: (state, action) => {
            state.loadingUsers = false;
            state.errorUsers = action.payload;
        },
        deleteUserStart: (state) => {
            state.loadingUsers = true;
        },
        deleteUserSuccess: (state) => {
            state.loadingUsers = false;
        },
        deleteUserFailure: (state, action) => {
            state.loadingUsers = false;
            state.errorUsers = action.payload;
        },
        changeUserDataStart: (state) => {
            state.loadingUsers = true;
        },
        changeUserDataSuccess: (state, action) => {
            state.loadingUsers = false;
            state.currentUserInformation = action.payload;
        },
        changeUserDataFailure: (state, action) => {
            state.loadingUsers = false;
            state.errorUsers = action.payload;
        },
        removeError: (state) => {
            state.errorUsers = '';
        },
        updateUserPostStart: (state) => {
            state.loadingPosts = true;
        },
        updateUserPostFinish: (state, action) => {
            state.loadingPosts = false;
            const { index, post } = action.payload;
            state.currentUserInformation.posts[index] = post;
        },
        userAddCommentStart: () => {},
        userAddCommentFinish: (state, action) => {
            state.currentUserInformation.posts[action.payload.index].comments = [
                ...state.currentUserInformation.posts[action.payload.index].comments,
                action.payload.comment,
            ];
        },
    },
});

export const {
    getUserStart,
    getUserSuccess,
    getUserFailure,
    getAllUsersStart,
    getAllUsersSuccess,
    getAllUsersFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    changeUserDataStart,
    changeUserDataSuccess,
    changeUserDataFailure,
    removeError,
    updateUserPostStart,
    updateUserPostFinish,
    userAddCommentStart,
    userAddCommentFinish,
} = usersReducer.actions;
