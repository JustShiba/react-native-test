import { createSlice } from '@reduxjs/toolkit';

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState: {
        currentUserInformation: {},
        allUsers: [],
        selectedUserId: '',
        loadingUsers: false,
        errorUsers: {
            errorUsersText: '',
            isError: false,
        },
    },
    reducers: {
        getUserStart: (state, action) => {
            state.loadingUsers = true;
            state.selectedUserId = action.payload;
        },
        getUserSuccess: (state, action) => {
            state.loadingUsers = false;
            state.selectedUserId = '';
            state.currentUserInformation = action.payload;
        },
        getUserFailure: (state, action) => {
            state.loadingUsers = false;
            state.selectedUserId = '';
            state.errorUsers.esError = true;
            state.errorUsers.errorUsersText = action.payload;
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
            state.errorUsers.errorUsersText = action.payload;
            state.errorUsers.isError = true;
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
} = usersReducer.actions;
