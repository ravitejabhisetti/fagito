import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-dates-wrapper.style';
import { FagitoDateComponent } from '../fagito-components';

class FagitoDatesWrapperComponent extends Component {
    render() {
        const { ...props } = this.props;
        let datesList = props.deliveryDatesList.map((dateEntity, index) => {
            if (dateEntity.day !== 'SUN') {
                return (
                    <FagitoDateComponent key={index} dateObject={dateEntity}></FagitoDateComponent>
                );
            }
        });
        return (
            <View style={STYLES.datesWrapperContainer}>
                {datesList}
            </View>
        )
    }
}

export default FagitoDatesWrapperComponent;