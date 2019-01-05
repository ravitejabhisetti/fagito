import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Dimensions, View, Text, AsyncStorage } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
    FagitoHomeScreen, FagitoWalletScreen, FagitoMealPassScreen,
    FagitoFeedbackScreen, FagitoHistoryScreen, FagitoOffersScreen,
    FagitoSupportScreen, FagitoSettingsScreen, FagitoFreeFoodScreen
} from '../fagito-screens';
import { FAGITO_HOME_SCREEN, DRAWER_POSITION_LEFT, FAGITO_USER_DETAILS } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { STYLES } from './fagito-drawer-navigator.style';

class CustomDrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { userDetails: null };
    }
    componentDidMount() {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            this.setState((state) => {
                return {
                    ...state,
                    userDetails: JSON.parse(userDetails)
                }
            })
        })
    }
    render() {
        return (
            <SafeAreaView style={STYLES.safeArea}>
                <View style={STYLES.headerSegment}>
                    <View style={STYLES.headerTitle}>
                        <Icon name='md-person' color='white' size={25} />
                        <Text style={STYLES.headerText}>{this.state.userDetails && this.state.userDetails.name}</Text>
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