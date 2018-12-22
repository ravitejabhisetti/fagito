import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { STYLES } from './fagito-back-arrow-header-style';

// const BackIcon = (props) => {
class BackIcon extends Component {
    render() {
        return (
            <View style={[STYLES.headerStyle, { backgroundColor: this.props.backgroundColor }]}>
                <View style={STYLES.headerAlign}>
                    <Icon onPress={() => this.props.navigateToHome()} name='md-arrow-back' size={26} color={this.props.iconColor} />
                    <View style={STYLES.headerText}>
                        <Text style={[STYLES.title, { color: this.props.iconColor }]}>{this.props.title}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default BackIcon;