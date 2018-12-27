import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-dates-wrapper.style';
import { FagitoDateComponent } from '../fagito-components';
import { connect } from 'react-redux';
import { handleSelectedDate } from '../../store/actions/actions';

class FagitoDatesWrapperComponent extends Component {
    handleSelectedDeliveryDate = (dateSelected) => {
        this.props.handleSelectedDeliveryDate(dateSelected);
    }
    render() {
        let datesList = this.props.deliveryDatesList.map((dateEntity, index) => {
            if (dateEntity.day !== 'SUN') {
                return (
                    <FagitoDateComponent handleDate={(dateSelected) => this.handleSelectedDeliveryDate(dateSelected)} key={index} dateObject={dateEntity}></FagitoDateComponent>
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

const mapStateToProps = (state) => {
    return {
        deliveryDatesList: state.deliveryTimingAndDates.deliveryDatesList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectedDeliveryDate: (selectedDate) => dispatch(handleSelectedDate(selectedDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoDatesWrapperComponent);