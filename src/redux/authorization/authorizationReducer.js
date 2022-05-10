import { createSlice } from '@reduxjs/toolkit';

export const authorizationReducer = createSlice({
    name: 'authorizationReducer',
    initialState: {
        userInformation: {},
        isAuthorized: false,
        loadingAuthorization: false,
        errorAuthorization: '',
    },
    reducers: {
        checkLoginStart: () => {},
        checkLoginFinish: (state, action) => {
            state.isAuthorized = action.payload;
        },
        loginStart: (state) => {
            state.loadingAuthorization = true;
        },
        loginSuccess: (state) => {
            state.loadingAuthorization = false;
            state.isAuthorized = true;
        },
        loginFailure: (state, action) => {
            state.loadingAuthorization = false;
            state.errorAuthorization = action.payload;
        },
        signupStart: (state) => {
            state.loadingAuthorization = true;
        },
        signupSuccess: (state) => {
            state.loadingAuthorization = false;
        },
        signupFailure: (state, action) => {
            state.loadingAuthorization = false;
            state.errorAuthorization = action.payload;
        },
        logout: (state) => {
            state.isAuthorized = false;
        },
        removeError: (state) => {
            state.errorAuthorization = '';
        },
    },
});

export const {
    checkLoginStart,
    checkLoginFinish,
    loginStart,
    loginSuccess,
    loginFailure,
    signupStart,
    signupSuccess,
    signupFailure,
    logout,
    removeError,
} = authorizationReducer.actions;
