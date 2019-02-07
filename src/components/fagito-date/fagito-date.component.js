import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-date.style';
import { TOMORROW, DOT_ICON } from '../../common/fagito-constants';
import Icon from 'react-native-vector-icons/Entypo';
import { DOT_COLOR } from '../../common/fagito-style-constants';

class FagitoDateComponent extends Component {
    handleSelectedDate = (selectedDate) => {
        this.props.handleDate(selectedDate);
    }
    render() {
        let dotSection = null;
        const { ...props } = this.props;
        if (props.selectedProducts.length > 0) {
            let currentDate = new Date().getTime();
            let currentMonth = new Date(currentDate).getMonth();
            let dateCheck = false;
            this.props.selectedProducts.map((product, index) => {
                if ((props.dateObject.date === product.selectedDate) && (product.monthOfSelectedDate >= currentMonth)) {
                    dateCheck = true;
                }
            });
            if (dateCheck) {
                dotSection = (
                    <View style={STYLES.dateContainer}>
                        <Icon name={DOT_ICON} color={DOT_COLOR} size={22}></Icon>
                    </View>
                )
            }
        }
        return (
            <View>
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
                        <Text style={[STYLES.textCenter, STYLES.dateFont,
                        props.dateObject.dateActive ? STYLES.dateSelected : STYLES.dateUnselected]}>{props.dateObject.date}</Text>
                    </View>
                    {dotSection}
                </TouchableOpacity>
            </View>
        )
    }
}

export default FagitoDateComponent;