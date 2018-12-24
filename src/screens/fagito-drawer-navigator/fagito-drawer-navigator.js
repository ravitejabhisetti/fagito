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

// const CustomDrawerComponent = (props) => (
class CustomDrawerComponent extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 60, backgroundColor: style.FAGITO_BLACK_COLOR, justifyContent: style.FAGITO_CENTER, padding: 15 }}>
                    <View style={{ flex: 1, flexDirection: style.FAGITO_ROW, justifyContent: style.FAGITO_FLEX_START }}>
                        <Icon name='md-person' color='white' size={25} />
                        <Text style={{ color: style.FAGITO_WHITE_COLOR, fontSize: 18, paddingLeft: 10, paddingBottom: 2, paddingTop: 6 }}>Ravi Teja Bhisetti</Text>
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