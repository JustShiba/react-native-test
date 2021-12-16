import { createSlice } from '@reduxjs/toolkit';

export const authorizationReducer = createSlice({
    name: 'authorizationReducer',
    initialState: {
        userInformation: {},
        inputUserInformation: {
            userAuthorizationInformation: {
                email: 'liyalisica9356@gmail.com',
                password: '93567202',
            },
        },
        isAuthorized: false,
        loadingAuthorization: false,
        errorAuthorization: {
            errorAuthorizationText: '',
            isError: false,
        },
    },
    reducers: {
        checkLoginStart: () => { },
        checkLoginFinish: (state, action) => {
            state.isAuthorized = action.payload;
        },
        loginStart: (state, action) => {
            state.loadingAuthorization = true;
            const { userEmail, userPassword } = action.payload
            state.inputUserInformation.userAuthorizationInformation.email = userEmail;
            state.inputUserInformation.userAuthorizationInformation.password = userPassword;
        },
        loginSuccess: (state, action) => {
            state.loadingAuthorization = false;
            state.userInformation = action.payload;
            state.isAuthorized = true;
            state.inputUserInformation.userAuthorizationInformation.email = '';
            state.inputUserInformation.userAuthorizationInformation.password = '';
        },
        loginFailure: (state, action) => {
            state.loadingAuthorization = false;
            state.errorAuthorization.isError = true;
            state.errorAuthorization.errorAuthorizationText = action.payload;
            state.inputUserInformation.userAuthorizationInformation.email = '';
            state.inputUserInformation.userAuthorizationInformation.password = '';
        },
        signupStart: (state, action) => {
            state.loadingAuthorization = true;
            const { userEmail, userPassword } = action.payload
            state.inputUserInformation.userAuthorizationInformation.email = userEmail;
            state.inputUserInformation.userAuthorizationInformation.password = userPassword;
        },
        signupSuccess: (state) => {
            state.loadingAuthorization = false;
            state.inputUserInformation.userAuthorizationInformation.email = '';
            state.inputUserInformation.userAuthorizationInformation.password = '';
        },
        signupFailure: (state, action) => {
            state.loadingAuthorization = false;
            state.errorAuthorization.isError = true;
            state.errorAuthorization.errorAuthorizationText = action.payload;
            state.inputUserInformation.userAuthorizationInformation.email = '';
            state.inputUserInformation.userAuthorizationInformation.password = '';
        },
        logout: (state) => {
            state.isAuthorized = false;
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
} = authorizationReducer.actions;
