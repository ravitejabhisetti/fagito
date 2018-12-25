import React, { Component } from 'react';
import { View, Text, BackHandler, Button, TouchableOpacity } from 'react-native';
import { Header, Left, right } from 'native-base';
import { ANDROID_HARDWARE_BACK_PRESS, LUNCH_BUTTON, DINNER_BUTTON } from '../../common/fagito-constants';
import { STYLES } from './fagito-home-screen-style';
import Icon from 'react-native-vector-icons/Ionicons';
import { FagitoLunchDinnerButtons } from '../../components/fagito-components';

class FagitoHomeScreen extends Component {
    state = { lunchTiming: true, dinnerTiming: false };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        BackHandler.addEventListener(ANDROID_HARDWARE_BACK_PRESS, this.handleBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener(ANDROID_HARDWARE_BACK_PRESS, this.handleBackPress);
    }
    handleBackPress = () => {
        BackHandler.exitApp();
    }
    handleFoodtimings = (lunchTiming) => {
        this.setState(prevState => {
            if (lunchTiming) {
                return {
                    lunchTiming: true,
                    dinnerTiming: false
                }
            } else {
                return {
                    lunchTiming: false,
                    dinnerTiming: true
                }
            }
        })
    }
    render() {
        return (
            <View style={STYLES.homeView}>
                <Header style={STYLES.header}>
                    <View style={STYLES.headerView}>
                        <View>
                            <Icon style={STYLES.headerIcon} name="md-menu" size={23} onPress={() => this.props.navigation.openDrawer()} />
                        </View>
                        <View style={STYLES.buttonsSegment}>
                            <FagitoLunchDinnerButtons handleFood={() => this.handleFoodtimings(true)} lunchButtonSelected={this.state.lunchTiming} lunchButton={true} title={LUNCH_BUTTON}></FagitoLunchDinnerButtons>
                            <FagitoLunchDinnerButtons handleFood={() => this.handleFoodtimings(false)} lunchButtonSelected={this.state.dinnerTiming} lunchButton={false} title={DINNER_BUTTON}></FagitoLunchDinnerButtons>
                        </View>
                        <View>
                            <Icon name='md-notifications' color='black' size={23}></Icon>
                        </View>
                    </View>
                </Header>
                <View style={STYLES.homeViewContent}>
                    <Text>Fagito Home Screen in drawer navigator</Text>
                </View>
            </View>
        )
    }
}

export default FagitoHomeScreen;