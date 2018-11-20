import React from 'react';
import { AppRegistry } from 'react-native';
import Fagito from './App';
import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <Fagito />
        </Provider>
    )
}

AppRegistry.registerComponent('fagito', () => App);