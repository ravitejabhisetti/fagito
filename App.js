import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {
    FagitoSignupSigninBrowseButtonsScreen, FagitoSignupScreen, FagitoSigninScreen,
    FagitoResetPasswordScreen
} from './src/screens/fagito-screens';
import { FAGITO_HOME } from './src/common/fagito-constants';
import { FAGITO_COMMON_STYLE } from './src/common/fagito-common-style';
import { FagitoLoader } from './src/components/fagito-components';
// import configureStore from './src/store/configureStore';
import { connect } from 'react-redux';

// const store = configureStore();

const RootStack = createStackNavigator({
    Fagito: FagitoSignupSigninBrowseButtonsScreen,
    Signup: FagitoSignupScreen,
    Signin: FagitoSigninScreen,
    ResetPassword: FagitoResetPasswordScreen
},
    {
        initialRouteName: FAGITO_HOME,
        navigationOptions: FAGITO_COMMON_STYLE
    }
)

// const Fagito = () => {
export class Fagito extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let loader = null;
        if (this.props.showLoader) {
            loader = (
                <FagitoLoader />
            );
        }
        return (
            <View style={{ flex: 1, zIndex: 100 }}>
                {loader}
                <RootStack />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showLoader: state.fagitoLoader.showLoader
    }
}

export default connect(mapStateToProps, null)(Fagito);