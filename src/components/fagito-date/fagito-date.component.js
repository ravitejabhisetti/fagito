import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-date.style';
import { TOMORROW } from '../../common/fagito-constants';

class FagitoDateComponent extends Component {
    handleSelectedDate = (selectedDate) => {
        this.props.handleDate(selectedDate);
    }
    render() {
        const { ...props } = this.props;
        return (
            <TouchableOpacity onPress={() => this.handleSelectedDate(props.dateObject)} activeOpacity={1} style={[
                STYLES.dateSegment,
                props.dateObject.dateActive ? STYLES.dateSegmentGreenBorder : STYLES.dateSegmentNoneBorder]}>
                <View style={STYLES.dateContainer}>
                    <Text style={[STYLES.textCenter,
                    props.dateObject.dateActive ? STYLES.daySelected : STYLES.dayUnselected,
                    props.dateObject.day === TOMORROW ? STYLES.tomorrowFont : STYLES.dayFont
                    ]}>{props.dateObject.day}</Text>
                </View>
                <View style={STYLES.dateContainer}>
                    <Text style={[STYLES.textCenter, STYLES.dateFont, props.dateObject.dateActive ? STYLES.dateSelected : STYLES.dateUnselected]}>{props.dateObject.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default FagitoDateComponent;