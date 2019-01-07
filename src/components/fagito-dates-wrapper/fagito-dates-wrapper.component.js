import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-dates-wrapper.style';
import { FagitoDateComponent } from '../fagito-components';
import { connect } from 'react-redux';
import { handleSelectedDate, getProductsOfDate } from '../../store/actions/actions';
import { SUNDAY } from '../../common/fagito-constants';

class FagitoDatesWrapperComponent extends Component {
    handleSelectedDeliveryDate = (dateSelected, dateIndex) => {
        this.props.handleSelectedDeliveryDate(dateSelected);
        if (this.props.locationFilter) {
            this.props.getProductsOfDate(this.props.timing, this.props.filters, dateIndex);
        }
    }
    render() {
        let datesList = this.props.deliveryDatesList.map((dateEntity, index) => {
            if (dateEntity.day !== SUNDAY) {
                return (
                    <FagitoDateComponent
                        handleDate={(dateSelected) => this.handleSelectedDeliveryDate(dateSelected, index)}
                        key={index}
                        selectedProducts={this.props.selectedProducts}
                        dateObject={dateEntity}>
                    </FagitoDateComponent>
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
        deliveryDatesList: state.deliveryTimingAndDates.deliveryDatesList,
        locationFilter: state.deliveryTimingAndDates.filters.locationFilter,
        timing: state.deliveryTimingAndDates.timing,
        filters: state.deliveryTimingAndDates.filters,
        selectedDateIndex: state.deliveryTimingAndDates.selectedDateIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectedDeliveryDate: (selectedDate) => dispatch(handleSelectedDate(selectedDate)),
        getProductsOfDate: (timing, filters, selectedDateIndex) => dispatch(getProductsOfDate(timing, filters, selectedDateIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoDatesWrapperComponent);