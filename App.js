import React from 'react';
import { Provider } from 'react-redux';

import { Index } from './src/components/index';
import { store } from './src/redux/rootReducer/rootReducer';

export default function App() {
    return (
        <Provider store={store}>
            <Index />
        </Provider>
    );
}
