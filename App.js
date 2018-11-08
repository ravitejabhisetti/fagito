import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FagitoSignupSigninBrowseButtonsScreen, FagitoSignupScreen, FagitoSigninScreen } from './src/screens/fagito-screens';
import { FAGITO_HOME } from './src/common/fagito-constants';
import { FAGITO_COMMON_STYLE } from './src/common/fagito-common-style';

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
        <RootStack />
    )
}

export default Fagito;