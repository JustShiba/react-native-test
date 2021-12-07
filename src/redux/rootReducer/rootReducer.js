import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../rootSaga/rootSaga';
import { authorizationReducer } from '../authorization/authorizationReducer';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    authorization: authorizationReducer.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);