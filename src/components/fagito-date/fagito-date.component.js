import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-date.style';

class FagitoDateComponent extends Component {
    render() {
        const { ...props } = this.props;
        return (
            <View>
                <View style={STYLES.dateContainer}>
                    <Text style={STYLES.textCenter}>{props.dateObject.day}</Text>
                </View>
                <View style={STYLES.dateContainer}>
                    <Text style={STYLES.textCenter}>{props.dateObject.date}</Text>
                </View>
            </View>
        )
    }
}

export default FagitoDateComponent;