import { createSlice } from '@reduxjs/toolkit';

export const authorizationReducer = createSlice({
    name: 'authorizationReducer',
    initialState: {
        userInformation: {},
        userAuthorizationInformation: {
            email: '',
            password: '',
        },
        isAuthorized: false,
        loadingAuthorization: false,
        errorAuthorization: false,
    },
    reducers: {
        loginStart: (state, action) => {
            state.userAuthorizationInformation.email = action.payload.userEmail;
            state.userAuthorizationInformation.password = action.payload.userPassword;
        },
        loginSuccess: (state, action) => {
            state.userInformation = action.payload;
        },
        loginFailure: (state, action) => {
            console.log('HEEELP');
        },
    },
});

export const { loginStart, loginSuccess, loginFailure } = authorizationReducer.actions;
