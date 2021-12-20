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
        changeUserDataStart: (state, action) => {
            state.loadingUsers = true;
        },
        changeUserDataSuccess: (state) => {
            state.loadingUsers = false;
        },
        changeUserDataFailure: (state, action) => {
            state.loadingUsers = false;
            state.errorUsers = action.payload;
        },
        removeError: (state) => {
            state.errorUsers = '';
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
} = usersReducer.actions;
