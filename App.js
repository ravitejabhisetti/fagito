import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { FagitoSignupSigninBrowseButtonsScreen, FagitoSignupScreen, FagitoSigninScreen } from './src/screens/fagito-screens';
import { FAGITO_HOME } from './src/common/fagito-constants';
import { FAGITO_COMMON_STYLE } from './src/common/fagito-common-style';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RootStack = createStackNavigator({
    Fagito: FagitoSignupSigninBrowseButtonsScreen,
    Signup: FagitoSignupScreen,
    Signin: FagitoSigninScreen
},
    {
        initialRouteName: FAGITO_HOME,
        navigationOptions: FAGITO_COMMON_STYLE
    }
)

const Fagito = () => {
    return (
        <Provider store={store}>
            <RootStack />
        </Provider>
    )
}

export default Fagito;