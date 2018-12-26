import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-date.style';

class FagitoDateComponent extends Component {
    render() {
        const { ...props } = this.props;
        return (
            <View style={STYLES.dateSegment}>
                <View style={STYLES.dateContainer}>
                    <Text style={[STYLES.textCenter,
                    props.dateObject.dateActive ? STYLES.daySelected : STYLES.dayUnselected,
                    props.dateObject.day === 'TOMORROW' ? STYLES.tomorrowFont : STYLES.dayFont
                    ]}>{props.dateObject.day}</Text>
                </View>
                <View style={STYLES.dateContainer}>
                    <Text style={[STYLES.textCenter, STYLES.dateFont, props.dateObject.dateActive ? STYLES.dateSelected : STYLES.dateUnselected]}>{props.dateObject.date}</Text>
                </View>
            </View>
        )
    }
}

export default FagitoDateComponent;