import { createSlice } from '@reduxjs/toolkit';

export const authorizationReducer = createSlice({
    name: 'authorizationReducer',
    initialState: {
        test: '',
    },
    reducers: {
        checkLogInStart: () => {},
    },
});

export const { checkLogInStart } = authReducer.actions;
