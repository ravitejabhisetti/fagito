import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, right, Icon } from 'native-base';

class FagitoHomeScreen extends Component {
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