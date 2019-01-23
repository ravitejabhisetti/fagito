import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {
    FagitoSignupSigninBrowseButtonsScreen, FagitoSignupScreen, FagitoSigninScreen,
    FagitoResetPasswordScreen, FagitoHomeScreen, FagitoUpdateUserDetailsScreen
} from './src/screens/fagito-screens';
import { FAGITO_HOME } from './src/common/fagito-constants';
import { FAGITO_COMMON_STYLE } from './src/common/fagito-common-style';
import { FagitoLoader, FagitoAlert } from './src/components/fagito-components';
// import configureStore from './src/store/configureStore';
import { connect } from 'react-redux';
import { DrawerNavigator } from './src/screens/fagito-drawer-navigator/fagito-drawer-navigator';

// const store = configureStore();

const RootStack = createStackNavigator({
    Fagito: FagitoSignupSigninBrowseButtonsScreen,
    'Sign up': FagitoSignupScreen,
    'Sign in': FagitoSigninScreen,
    ResetPassword: FagitoResetPasswordScreen,
    UpdateUserDetails: FagitoUpdateUserDetailsScreen,
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
},
    {
        headerLayoutPreset: 'left',
        initialRouteName: FAGITO_HOME,
        navigationOptions: FAGITO_COMMON_STYLE
    }
)

export let navigatorRef;

// const Fagito = () => {
export class Fagito extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        navigatorRef = this.navigator;
    }
    render() {
        let loader = null;
        let alert = null;
        if (this.props.showLoader) {
            loader = (
                <FagitoLoader loaderText={this.props.loaderText} />
            );
        }
        if (this.props.showAlert) {
            alert = (
                <FagitoAlert alertItems={this.props.alertItems} />
            )
        }
        return (
            <View style={{ flex: 1, zIndex: 100 }}>
                {loader}
                {alert}
                <RootStack ref={nav => { this.navigator = nav; }} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showLoader: state.fagitoLoader.showLoader,
        loaderText: state.fagitoLoader.loaderText,
        showAlert: state.fagitoAlert.showAlert,
        alertItems: state.fagitoAlert.alertItems
    }
}

export default connect(mapStateToProps, null)(Fagito);