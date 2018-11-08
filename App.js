import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FagitoSignupSigninBrowseButtonsScreen, FagitoSignupScreen, FagitoSigninScreen } from './src/screens/fagito-screens';
import { FAGITO_HOME } from './src/common/fagito-constants';

const RootStack = createStackNavigator({
    Fagito: FagitoSignupSigninBrowseButtonsScreen,
    Signup: FagitoSignupScreen,
    Signin: FagitoSigninScreen
},
    {
        initialRouteName: FAGITO_HOME
    }
)

const Fagito = () => {
    return (
        <RootStack />
    )
}

export default Fagito;