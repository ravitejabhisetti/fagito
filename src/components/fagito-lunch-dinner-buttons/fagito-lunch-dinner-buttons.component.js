import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-lunch-dinner-buttons.style';

const FagitoLunchDinnerButtons = (props) => {
    return (
        <View style={[
            STYLES.segmentButton,
            props.lunchButton ? STYLES.lunchSegmentButton : STYLES.dinnerSegmentButton,
            props.lunchButtonSelected ? STYLES.segmentButtonRedBackgroundColor : STYLES.segmentButtonWhiteBackgroundColor
        ]}>
            <TouchableOpacity onPress={props.handleFood} activeOpacity={1}>
                <Text
                    style={props.lunchButtonSelected ? STYLES.segmentButtonTextWhiteColor : STYLES.segmentButtonTextRedColor}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FagitoLunchDinnerButtons;