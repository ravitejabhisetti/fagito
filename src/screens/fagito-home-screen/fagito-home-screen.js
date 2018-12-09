import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Header, Left, right, Icon } from 'native-base';
import { ANDROID_HARDWARE_BACK_PRESS } from '../../common/fagito-constants';
import { STYLES } from './fagito-home-screen-style';

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
            <View>
                <Header style={STYLES.header}>
                    <View style={STYLES.headerView}>
                        <Icon style={STYLES.headerIcon} name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                </Header>
                <View style={{ backgroundColor: 'white' }}>
                    <Text>Fagito Home Screen in drawer navigator</Text>
                </View>
            </View>
        )
    }
}

export default FagitoHomeScreen;