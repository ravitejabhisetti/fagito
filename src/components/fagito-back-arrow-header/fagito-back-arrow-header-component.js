import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import { STYLES } from './fagito-back-arrow-header-style';

// const BackIcon = (props) => {
class BackIcon extends Component {
    render() {
        let icon = null;
        if (Platform.OS === 'ios') {
            icon = (
                <FontAwesomeIcons style={STYLES.iosIconStyle}
                    onPress={() => this.props.navigateToHome()}
                    name='chevron-left'
                    size={22}
                    color={this.props.iconColor} />
            )
        } else {
            icon = (
                <Icon onPress={() => this.props.navigateToHome()} name='md-arrow-back' size={26} color={this.props.iconColor} />
            )
        }
        return (
            <View style={[STYLES.headerStyle, this.props.borderColor ? STYLES.borderShadow : null, {
                backgroundColor: this.props.backgroundColor,
                borderBottomWidth: this.props.borderWidth, borderColor: this.props.borderColor
            }]}>
                <View style={STYLES.headerAlign}>
                    {icon}
                    <View style={STYLES.headerText}>
                        <Text style={[STYLES.title, { color: this.props.iconColor }]}>{this.props.title}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default BackIcon;