import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { STYLES } from './fagito-alert.style';
import { OVERLAY_STYLE } from '../../common/fagito-common-style';
import validate from '../../utility/fagito-error-messages';
import * as style from '../../common/fagito-style-constants';
import { connect } from 'react-redux';
import {
    fagitoHideAlert, updateFilter, getProductsOfDate,
    updateAddressDetails, updateUserLocationDetails
} from '../../store/actions/actions';
import RadioForm from 'react-native-simple-radio-button';
import {
    LOCATION_FILTER, ADD_OFFICE_ADDRESS, ADD_HOME_ADDRESS,
    UPDATE_USER_DETAILS_SCREEN, ADDRESS, OFFICE_FIELD, HOME_FIELD, FAGITO_HOME, DIET_FILTER_NAME, CUISINE_FILTER_NAME, ADDRESS_TYPE
} from '../../common/fagito-constants';
import { navigatorRef } from '../../../App';
import { NavigationActions } from 'react-navigation';

class FagitoAlert extends Component {
    state = {
        showAlert: true,
        index: 0
    }
    handleAlert = (event, close) => {
        if (close) {
            this.props.hideAlert();
        }
    }
    componentDidMount() {
        if (this.props.alertItems.radioOptionIndex) {
            this.setState((state) => {
                return {
                    ...state,
                    index: this.props.alertItems.radioOptionIndex
                }
            })
        }
    }
    handleSubmit = (updateEntity) => {
        if (updateEntity) {
            if (!this.props.alertItems.userProfile) {
                let selectedRadioOptionLabel = this.props.alertItems.options[this.state.index].label;
                let addressLabelCheck = selectedRadioOptionLabel !== ADD_OFFICE_ADDRESS && selectedRadioOptionLabel !== ADD_HOME_ADDRESS;
                if (addressLabelCheck) {
                    this.props.updateFilter(this.props.alertItems.filterName, this.state.index);
                }
                if (this.props.alertItems.filterName === LOCATION_FILTER && addressLabelCheck) {
                    this.props.getProductsOfDate(this.props.timing, this.props.filters, this.props.selectedDateIndex);
                } else {
                    let fieldName = selectedRadioOptionLabel === ADD_OFFICE_ADDRESS ? OFFICE_FIELD : HOME_FIELD;
                    let filterName = this.props.alertItems.filterName;
                    if (fieldName === OFFICE_FIELD || fieldName === HOME_FIELD) {
                        this.props.updateAddressDetails(ADDRESS_TYPE, fieldName === HOME_FIELD ? 1 : 0);
                    }
                    if (filterName !== DIET_FILTER_NAME && filterName !== CUISINE_FILTER_NAME) {
                        navigatorRef.dispatch(NavigationActions.navigate({
                            routeName: UPDATE_USER_DETAILS_SCREEN, params: {
                                sectionName: ADDRESS, loggedInUserDetails: this.props.loggedInUserDetails,
                                fieldName: fieldName, addAddress: true
                            }
                        }))
                    }
                }
            } else {
                this.props.updateAddressDetails(this.props.alertItems.filterName, this.state.index);
            }
        }
        this.props.hideAlert();
    }

    handleRadioButtonSelection = (value, indexSelected) => {
        this.setState((state) => {
            return {
                ...state,
                index: indexSelected
            }
        })
    }
    render() {
        let error = null;
        let dropdownContent = null;
        if (this.props.alertItems.error || this.props.alertItems.alertHeader) {
            let header = this.props.alertItems.error ? 'Error' : this.props.alertItems.alertHeader;
            let headerMessage = (this.props.alertItems.error && this.props.alertItems.error.message) ?
                validate(this.props.alertItems.error.message) : this.props.alertItems.alertMessage;
            error = (
                <View>
                    <View style={STYLES.errorMessageSection}>
                        <Text style={[STYLES.alertErrorText, STYLES.alertErrorHeader]}>{header}</Text>
                        <Text style={[STYLES.alertErrorText, STYLES.alertErrorMessage]}>{headerMessage}</Text>
                    </View>
                    <View style={STYLES.alertButtonsContainer}>
                        <View style={STYLES.alertSubmitButton}>
                            <TouchableOpacity onPress={() => this.handleSubmit(false)} activeOpacity={style.FAGITO_BUTTON_OPACITY}>
                                <Text style={STYLES.buttonText}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        } else {
            let dropdownHeaderDescription = null;
            let radio_props = this.props.alertItems.options;
            if (this.props.alertItems.headerDescription !== '' && !this.props.alertItems.hideHeaderDescription) {
                dropdownHeaderDescription = (
                    <Text style={this.props.alertItems.headerDescription}>{this.props.alertItems.headerDescription}</Text>
                )
            }
            dropdownContent = (
                <TouchableWithoutFeedback onPress={(event) => this.handleAlert(event, false)}>
                    <View>
                        <View style={STYLES.headerSegment}>
                            <Text style={STYLES.headerTitle}>{this.props.alertItems.header}</Text>
                            {dropdownHeaderDescription}
                        </View>
                        <ScrollView style={STYLES.dropdownOptionsSection}>
                            <RadioForm
                                initial={this.props.alertItems.radioOptionIndex}
                                radioStyle={STYLES.radioButton}
                                onPress={(value, index) => this.handleRadioButtonSelection(value, index)}
                                buttonOuterSize={16}
                                buttonSize={6}
                                selectedButtonColor={style.FAGITO_BUTTON_COLOR}
                                buttonColor={style.RADIO_OPTION_COLOR}
                                selectedLabelColor={style.FAGITO_BUTTON_COLOR}
                                labelStyle={STYLES.radioOptionLabel}
                                radio_props={this.props.alertItems.options}>
                            </RadioForm>
                        </ScrollView>
                        <View style={STYLES.buttonsSegment}>
                            <View>
                                <TouchableOpacity onPress={(update) => this.handleSubmit(false)} activeOpacity={style.FAGITO_BUTTON_OPACITY}>
                                    <Text style={STYLES.buttonText}>CANCEL</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={(update) => this.handleSubmit(true)} activeOpacity={style.FAGITO_BUTTON_OPACITY}>
                                    <Text style={STYLES.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )
        }
        return (
            <View style={OVERLAY_STYLE.overlay}>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.showAlert}
                    onRequestClose={this.handleAlert}
                >
                    <TouchableWithoutFeedback onPress={(event) => this.handleAlert(event, true)}>
                        <View style={STYLES.alertContainer}>
                            <View style={STYLES.alertContent}>
                                {error}
                                {dropdownContent}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        timing: state.deliveryTimingAndDates.timing,
        filters: state.deliveryTimingAndDates.filters,
        selectedDateIndex: state.deliveryTimingAndDates.selectedDateIndex,
        loggedInUserDetails: state.userDetails.loggedInUserDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideAlert: () => dispatch(fagitoHideAlert()),
        updateFilter: (filterName, index) => dispatch(updateFilter(filterName, index)),
        updateAddressDetails: (filterName, index) => dispatch(updateAddressDetails(filterName, index)),
        getProductsOfDate: (timing, filters, selectedDateIndex) => dispatch(getProductsOfDate(timing, filters, selectedDateIndex)),
        updateUserLocationDetails: (fieldName, loggedInUserDetails) => dispatch(updateUserLocationDetails(fieldName, loggedInUserDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoAlert);