import React from 'react';
import { Provider } from 'react-redux';

import { Index } from './src/components/index';
import { store } from './src/redux/rootReducer/rootReducer';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="transparent" style="light" />
            <Index />
        </Provider>
    );
}
