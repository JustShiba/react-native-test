import { createSlice } from '@reduxjs/toolkit';

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState: {
        useEng: false,
        loadingUsers: false,
        errorUsers: '',
    },
    reducers: {
        changeLanguage: (state) => {
            state.useEng = !state.useEng;
        },
    },
});

export const {
    changeLanguage
} = usersReducer.actions;
