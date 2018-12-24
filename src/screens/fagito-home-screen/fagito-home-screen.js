import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Header, Left, right } from 'native-base';
import { ANDROID_HARDWARE_BACK_PRESS } from '../../common/fagito-constants';
import { STYLES } from './fagito-home-screen-style';
import { FagitoLunchDinnerButtons } from '../../components/fagito-components';
import Icon from 'react-native-vector-icons/Ionicons';

class FagitoHomeScreen extends Component {
    componentDidMount() {
        BackHandler.addEventListener(ANDROID_HARDWARE_BACK_PRESS, this.handleBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener(ANDROID_HARDWARE_BACK_PRESS, this.handleBackPress);
    }
    handleBackPress = () => {
        BackHandler.exitApp();
    }
    render() {
        return (
            <View style={STYLES.homeView}>
                <Header style={STYLES.header}>
                    <View style={STYLES.headerView}>
                        <View>
                            <Icon style={STYLES.headerIcon} name="md-menu" size={23} onPress={() => this.props.navigation.openDrawer()} />
                        </View>
                        <View>
                            <FagitoLunchDinnerButtons></FagitoLunchDinnerButtons>
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