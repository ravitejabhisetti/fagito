import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Dimensions, View, Text, AsyncStorage, TouchableOpacity, Alert } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
    FagitoHomeScreen, FagitoWalletScreen, FagitoMealPassScreen,
    FagitoFeedbackScreen, FagitoHistoryScreen, FagitoOffersScreen,
    FagitoSupportScreen, FagitoSettingsScreen, FagitoFreeFoodScreen, FagitoSignupScreen, FagitoSigninScreen
} from '../fagito-screens';
import { FAGITO_HOME_SCREEN, DRAWER_POSITION_LEFT, FAGITO_USER_DETAILS, FAGITO_HOME, FAGITO_SIGNUP_SCREEN, FAGITO_SIGNIN_SCREEN } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { STYLES } from './fagito-drawer-navigator.style';
import { navigatorRef } from '../../../App';
import { NavigationActions } from 'react-navigation';

class CustomDrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { userDetails: null, userLoggedIn: false };
    }
    componentWillMount() {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            if (userDetails) {
                this.setState((state) => {
                    return {
                        ...state,
                        userDetails: JSON.parse(userDetails),
                        userLoggedIn: true
                    }
                })
            }
        })
    }

    componentDidUpdate() {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            if (userDetails && !this.state.userDetails) {
                this.setState((state) => {
                    return {
                        ...state,
                        userDetails: JSON.parse(userDetails),
                        userLoggedIn: true
                    }
                })
            }
        })
    }

    render() {
        let userNameSegment = null;
        let logoutSection = null;
        let itemsToBeDisplayed = [];
        const props = this.props;
        if (this.state.userLoggedIn) {
            itemsToBeDisplayed = this.props.items.filter((item, index) => {
                return item.key !== FAGITO_SIGNUP_SCREEN && item.key !== FAGITO_SIGNIN_SCREEN;
            });
            userNameSegment = (
                <View style={STYLES.headerSegment}>
                    <View style={STYLES.headerTitle}>
                        <Icon name='md-person' color='white' size={25} />
                        <Text style={STYLES.headerText}>{this.state.userDetails && this.state.userDetails.name}</Text>
                    </View>
                </View>
            )
            logoutSection = (
                <TouchableOpacity onPress={() => {
                    AsyncStorage.clear();
                    navigatorRef.dispatch(NavigationActions.navigate({ routeName: FAGITO_HOME }));
                }
                }>
                    <Text style={STYLES.logoutText}>Logout</Text>
                </TouchableOpacity>
            )
        } else {
            itemsToBeDisplayed = this.props.items.filter((item, index) => {
                return item.key === FAGITO_SIGNUP_SCREEN || item.key === FAGITO_SIGNIN_SCREEN;
            });
        }

        return (
            <SafeAreaView style={STYLES.safeArea}>
                {userNameSegment}
                <ScrollView>
                    <DrawerItems {...props} items={itemsToBeDisplayed} />
                    {logoutSection}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const DrawerNavigator = createDrawerNavigator({
    Home: FagitoHomeScreen,
    Wallet: FagitoWalletScreen,
    Mealpass: FagitoMealPassScreen,
    Feedback: FagitoFeedbackScreen,
    History: FagitoHistoryScreen,
    Offers: FagitoOffersScreen,
    'Free Food': FagitoFreeFoodScreen,
    'Sign up': FagitoSignupScreen,
    'Sign in': FagitoSigninScreen,
    Support: FagitoSupportScreen,
    Settings: FagitoSettingsScreen
},
    {
        contentComponent: CustomDrawerComponent,
        drawerPosition: DRAWER_POSITION_LEFT,
        initialRouteName: FAGITO_HOME_SCREEN,
        contentOptions: {
            activeTintColor: style.FAGITO_BUTTON_COLOR,
            activeBackgroundColor: style.FAGITO_WHITE_COLOR,
            labelStyle: {
                fontFamily: style.FAGITO_FONT_FAMILY_LATO_LIGHT,
                fontSize: 13,
                fontWeight: '400'
            }
        }
    }
);

export { DrawerNavigator };