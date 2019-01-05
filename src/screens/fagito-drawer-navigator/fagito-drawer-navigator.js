import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Dimensions, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
    FagitoHomeScreen, FagitoWalletScreen, FagitoMealPassScreen,
    FagitoFeedbackScreen, FagitoHistoryScreen, FagitoOffersScreen,
    FagitoSupportScreen, FagitoSettingsScreen, FagitoFreeFoodScreen
} from '../fagito-screens';
import { FAGITO_HOME_SCREEN, DRAWER_POSITION_LEFT } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { STYLES } from './fagito-drawer-navigator.style';

// const CustomDrawerComponent = (props) => (
class CustomDrawerComponent extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.safeArea}>
                <View style={STYLES.headerSegment}>
                    <View style={STYLES.headerTitle}>
                        <Icon name='md-person' color='white' size={25} />
                        <Text style={STYLES.headerText}>Ravi Teja Bhisetti</Text>
                    </View>
                </View>
                <ScrollView>
                    <DrawerItems {...this.props} />
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
                fontSize: 13
            }
        }
    }
);

export { DrawerNavigator };