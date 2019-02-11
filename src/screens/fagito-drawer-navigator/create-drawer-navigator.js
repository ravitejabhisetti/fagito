import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
    FagitoHomeScreen, FagitoWalletScreen, FagitoMealPassScreen,
    FagitoFeedbackScreen, FagitoHistoryScreen, FagitoOffersScreen, CustomDrawerComponent,
    FagitoSupportScreen, FagitoSettingsScreen, FagitoFreeMealScreen, FagitoSignupScreen, FagitoSigninScreen
} from '../fagito-screens';
import {
    FAGITO_HOME_SCREEN, DRAWER_POSITION_LEFT
} from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';

const DrawerNavigator = createDrawerNavigator({
    Home: FagitoHomeScreen,
    Wallet: FagitoWalletScreen,
    Mealpass: FagitoMealPassScreen,
    Feedback: FagitoFeedbackScreen,
    History: FagitoHistoryScreen,
    Offers: FagitoOffersScreen,
    'Free Meal': FagitoFreeMealScreen,
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
                fontFamily: style.FAGITO_FONT_FAMILY_LATO,
                fontSize: 13,
                fontWeight: '400'
            }
        }
    }
);

export { DrawerNavigator };