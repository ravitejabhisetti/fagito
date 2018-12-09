import React from 'react';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { FagitoHomeScreen, FagitoWalletScreen } from '../fagito-screens';

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)


const DrawerNavigator = createDrawerNavigator({
    Home: FagitoHomeScreen,
    Wallet: FagitoWalletScreen
},
    {
        contentComponent: CustomDrawerComponent,
        initialRouteName: 'Home'
    }
);

export { DrawerNavigator };