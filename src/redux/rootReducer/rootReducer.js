import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../rootSaga/rootSaga';
import { authorizationReducer } from '../authorization/authorizationReducer';
import { usersReducer } from '../users/usersReducer';
import { postsReducer } from '../posts/postsReducer';
import { commentsReducer } from '../comments/commentsReducer';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    authorization: authorizationReducer.reducer,
    users: usersReducer.reducer,
    posts: postsReducer.reducer,
    comments: commentsReducer.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
