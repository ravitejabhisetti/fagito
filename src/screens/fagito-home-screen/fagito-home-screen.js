import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Header, Left, right, Icon } from 'native-base';
import { ANDROID_HARDWARE_BACK_PRESS } from '../../common/fagito-constants';

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
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Fagito Home Screen in drawer navigator</Text>
                </View>
            </View>
        )
    }
}

export default FagitoHomeScreen;