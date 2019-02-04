import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Dimensions, View, Text, AsyncStorage, TouchableOpacity, Alert } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
    FAGITO_USER_DETAILS,
    FAGITO_HOME, FAGITO_SIGNUP_SCREEN, FAGITO_SIGNIN_SCREEN, DRAWER_WALLET_BALNCE_TEXT
} from '../../common/fagito-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { STYLES } from './custom-drawer-component-style';
import { navigatorRef } from '../../../App';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { resetAppState } from '../../store/actions/actions';

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
        let currentWalletBalance = null;
        const props = this.props;
        if (this.state.userLoggedIn) {
            itemsToBeDisplayed = this.props.items.filter((item, index) => {
                return item.key !== FAGITO_SIGNUP_SCREEN && item.key !== FAGITO_SIGNIN_SCREEN;
            });
            if (this.state.userDetails.walletAmount && this.state.userDetails.walletAmount > 0) {
                let balance = DRAWER_WALLET_BALNCE_TEXT + this.state.userDetails.walletAmount;
                currentWalletBalance = (
                    <Text style={STYLES.balanceText}>{balance}</Text>
                )
            }
            userNameSegment = (
                <View style={STYLES.headerSegment}>
                    <View style={STYLES.headerTitle}>
                        <Icon name='md-person' color='white' size={25} />
                        <Text style={STYLES.headerText}>{this.state.userDetails && this.state.userDetails.name}</Text>
                    </View>
                    <View>
                        {currentWalletBalance}
                    </View>
                </View>
            )
            logoutSection = (
                <TouchableOpacity onPress={() => {
                    AsyncStorage.clear();
                    this.props.resetAppState();
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

const mapDispatchToProps = (dispatch) => {
    return {
        resetAppState: () => dispatch(resetAppState())
    }
}

export default connect(null, mapDispatchToProps)(CustomDrawerComponent);

