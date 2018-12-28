import React, { Component } from 'react';
import { View, Text, BackHandler, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Header, Left, right } from 'native-base';
import { ANDROID_HARDWARE_BACK_PRESS, LUNCH_BUTTON, DINNER_BUTTON } from '../../common/fagito-constants';
import { STYLES } from './fagito-home-screen-style';
import Icon from 'react-native-vector-icons/Ionicons';
import { FagitoLunchDinnerButtons, FagitoDatesWrapperComponent, FagitoDateComponent, FagitoDropdown } from '../../components/fagito-components';
import { updateDeliveryTiming } from '../../store/actions/actions';

class FagitoHomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
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
        this.props.updateDeliveryTiming(lunchTiming);
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
                            <FagitoLunchDinnerButtons handleFood={() => this.handleFoodtimings(true)} lunchButtonSelected={this.props.deliveryTiming.lunchTiming} lunchButton={true} title={LUNCH_BUTTON}></FagitoLunchDinnerButtons>
                            <FagitoLunchDinnerButtons handleFood={() => this.handleFoodtimings(false)} lunchButtonSelected={this.props.deliveryTiming.dinnerTiming} lunchButton={false} title={DINNER_BUTTON}></FagitoLunchDinnerButtons>
                        </View>
                        <View>
                            <Icon name='md-notifications' color='black' size={23}></Icon>
                        </View>
                    </View>
                </Header>
                <View style={STYLES.homeViewContent}>
                    <FagitoDatesWrapperComponent></FagitoDatesWrapperComponent>
                    <FagitoDropdown></FagitoDropdown>
                    <Text>Fagito Home Screen in drawer navigator</Text>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDeliveryTiming: (lunchTiming) => dispatch(updateDeliveryTiming(lunchTiming))
    }
}

const mapStateToProps = (state) => {
    return {
        deliveryTiming: state.deliveryTimingAndDates.timing
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FagitoHomeScreen);