import { createSlice } from '@reduxjs/toolkit';

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState: {
        currentUserInformation: {},
        listOfUsers: [],
        selectedUserId: '',
        loadingUsers: false,
        errorUsers: {
            errorAuthorizationText: '',
            isError: false,
        },
    },
    reducers: {
        getUserStart: (state, action) => {
            state.loadingUsers = true;
            state.selectedUserId = action.payload
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
            state.errorUsers.errorAuthorizationText = action.payload;
        },
    },
});

export const {
    getUserStart,
    getUserSuccess,
    getUserFailure,
} = usersReducer.actions;
