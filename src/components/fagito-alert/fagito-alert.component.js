import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { STYLES } from './fagito-alert.style';
import { OVERLAY_STYLE } from '../../common/fagito-common-style';
import validate from '../../utility/fagito-error-messages';
import * as style from '../../common/fagito-style-constants';
import { connect } from 'react-redux';
import { fagitoHideAlert, updateFilter, getProductsOfDate } from '../../store/actions/actions';
import RadioForm from 'react-native-simple-radio-button';
import { LOCATION_FILTER } from '../../common/fagito-constants';

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
    handleSubmit = (updateEntity) => {
        if (updateEntity) {
            this.props.updateFilter(this.props.alertItems.filterName, this.state.index);
            if (this.props.alertItems.filterName === LOCATION_FILTER) {
                this.props.getProductsOfDate(this.props.timing, this.props.filters, this.props.selectedDateIndex);
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
        if (this.props.alertItems.error) {
            error = (
                <View>
                    <Text style={[STYLES.alertErrorText, STYLES.alertErrorHeader]}>Error</Text>
                    <Text style={[STYLES.alertErrorText, STYLES.alertErrorMessage]}>{validate(this.props.alertItems.error.message)}</Text>
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
            let radio_props = this.props.alertItems.options;
            let dropdownHeaderDescription = null;
            if (this.props.alertItems.headerDescription !== '') {
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
        selectedDateIndex: state.deliveryTimingAndDates.selectedDateIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideAlert: () => dispatch(fagitoHideAlert()),
        updateFilter: (filterName, index) => dispatch(updateFilter(filterName, index)),
        getProductsOfDate: (timing, filters, selectedDateIndex) => dispatch(getProductsOfDate(timing, filters, selectedDateIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoAlert);