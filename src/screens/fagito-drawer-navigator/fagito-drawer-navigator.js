import React from 'react';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
    FagitoHomeScreen, FagitoWalletScreen, FagitoMealPassScreen,
    FagitoFeedbackScreen, FagitoHistoryScreen, FagitoOffersScreen,
    FagitoSupportScreen, FagitoSettingsScreen, FagitoFreeFoodScreen
} from '../fagito-screens';
import { FAGITO_HOME_SCREEN, DRAWER_POSITION_LEFT } from '../../common/fagito-constants';

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)


const DrawerNavigator = createDrawerNavigator({
    Home: FagitoHomeScreen,
    Wallet: FagitoWalletScreen,
    Mealpass: FagitoMealPassScreen,
    Feedback: FagitoFeedbackScreen,
    History: FagitoHistoryScreen,
    Offers: FagitoOffersScreen,
    'Free Food': FagitoFreeFoodScreen,
    Support: FagitoSupportScreen,
    Settings: FagitoSettingsScreen
},
    {
        contentComponent: CustomDrawerComponent,
        drawerPosition: DRAWER_POSITION_LEFT,
        initialRouteName: FAGITO_HOME_SCREEN
    }
);

export { DrawerNavigator };