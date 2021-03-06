import React, { Component } from 'react';
import { View, Text, Modal, BackHandler, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { STYLES } from './fagito-modal.style';
import {
    ANDROID_HARDWARE_BACK_PRESS, ORDERS, SIMILAR_MEAL, VARIANTS, ADDONS, ADDONS_LIST,
    ADDON_NOTE, FEEDBACK_MODAL, FEEDBACK_MODAL_TEXT
} from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import RadioForm from 'react-native-simple-radio-button';
import { FagitoFooterComponent, FagitoAddonsList } from '../../components/fagito-components';
import { updatedProductsOfUser, resetAddons } from '../../store/actions/actions';
import { connect } from 'react-redux';

class FagitoModalComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        modalVisible: true,
        modalSelectedProduct: {},
        variantIndex: null,
        buttonInActive: true
    }
    toggleModal = () => {
        this.props.hideModal();
    }
    componentWillMount() {
        if (this.props.type === VARIANTS) {
            this.props.modalContent.variants.map((variant, variantIndex) => {
                variant.label = variant.name + ' - Rs. ' + variant.price;
            });
        }
        this.props.resetAddons();
    }
    handleVariant = (value, index) => {
        this.setState((state) => {
            return {
                ...state,
                variantIndex: index,
                modalSelectedProduct: this.props.modalContent.variants[index],
                buttonInActive: false
            }
        })
    }
    handleMeal = () => {
        this.toggleModal();
        this.props.scrollUp();
        this.props.updatedProductsOfUser(this.props.modalContent,
            this.props.timing.timingSelected, this.props.selectedDate,
            this.props.monthOfSelectedDate, this.state.variantIndex, true, null);
    }

    render() {
        let modalContentSegment = null;
        let modalHeading = null;
        let modalFooterSegment = null;
        let modalNoteMessage = null;
        this.state.modalVisible = this.props.showModal;
        let headerTextColor = (this.props.type === ORDERS || this.props.type === ADDONS) ?
            STYLES.modalTextHeaderWhiteColor : STYLES.modalTextHeaderGreyColor;
        if (this.props.type === ORDERS) {
            modalHeading = this.props.modalContent.modalHeader;
            modalContentSegment = (
                <View style={STYLES.modalContentSegment}>
                    <Text style={STYLES.modalMessageText}>{this.props.modalContent.modalMessage}</Text>
                </View>
            )
        }
        if (this.props.type === VARIANTS) {
            modalHeading = SIMILAR_MEAL;
            if (this.props.modalContent.variants.length) {
                modalContentSegment = (
                    <RadioForm
                        initial={null}
                        radioStyle={STYLES.radioButton}
                        onPress={(value, index) => this.handleVariant(value, index)}
                        buttonOuterSize={16}
                        buttonSize={6}
                        selectedButtonColor={style.FAGITO_BUTTON_COLOR}
                        buttonColor={style.RADIO_OPTION_COLOR}
                        selectedLabelColor={style.FAGITO_BUTTON_COLOR}
                        labelStyle={STYLES.radioOptionLabel}
                        radio_props={this.props.modalContent.variants}>
                    </RadioForm>
                )
                modalFooterSegment = (
                    <FagitoFooterComponent
                        buttonInActive={this.state.buttonInActive}
                        handleMeal={() => this.handleMeal()}
                        selectedProduct={this.state.modalSelectedProduct}
                        modalFooter={true}>
                    </FagitoFooterComponent>
                )
            }
        }
        if (this.props.type === ADDONS) {
            modalHeading = this.props.timing.timingSelected + ' addons';
            modalContentSegment = Object.keys(ADDONS_LIST).map((addonEntity, index) => {
                return (
                    <View key={index}>
                        <FagitoAddonsList
                            addonsCount={this.props.addonsCount}
                            addonSectionName={addonEntity}
                            addonsList={ADDONS_LIST[addonEntity]}></FagitoAddonsList>
                    </View>
                )
            })
            modalFooterSegment = (
                <FagitoFooterComponent
                    addonsCount={this.props.addonsCount}
                    hideModal={this.toggleModal}
                    modalAddon={true}
                    selectedProduct={this.props.modalContent}
                    modalFooter={true}></FagitoFooterComponent>
            )
            modalNoteMessage = (
                <Text style={STYLES.addonNote}>{ADDON_NOTE}</Text>
            )
        }
        if (this.props.type === FEEDBACK_MODAL) {
            modalHeading = FEEDBACK_MODAL;
            modalContentSegment = (
                <View style={STYLES.feedbackText}>
                    <Text style={STYLES.feedbackText}>{FEEDBACK_MODAL_TEXT}</Text>
                </View>
            )
        }
        return (
            <View>
                <Modal animationType={"fade"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={this.toggleModal}>
                    <View style={STYLES.modal}>
                        <View style={[STYLES.modalHeader,
                        (this.props.type === ORDERS || this.props.type === ADDONS || this.props.type === FEEDBACK_MODAL) ? STYLES.modalHeaderOrdersBackground : STYLES.modalContent]}>
                            <View>
                                <Text style={[STYLES.modalText, STYLES.modalHeading, headerTextColor, this.props.type === FEEDBACK_MODAL ? STYLES.headerTextWhiteColor : null]}>{modalHeading}</Text>
                            </View>
                            <TouchableHighlight onPress={this.toggleModal} style={STYLES.modalCloseButton}>
                                <Text style={[STYLES.modalText, STYLES.modalCloseText, headerTextColor, this.props.type === FEEDBACK_MODAL ? STYLES.headerTextWhiteColor : null]}>CLOSE</Text>
                            </TouchableHighlight>
                        </View>
                        <ScrollView>
                            <View style={STYLES.modalContent}>
                                {modalNoteMessage}
                                {modalContentSegment}
                            </View>
                        </ScrollView>
                        {modalFooterSegment}
                    </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        timing: state.deliveryTimingAndDates.timing,
        selectedDate: state.deliveryTimingAndDates.selectedDate,
        monthOfSelectedDate: state.deliveryTimingAndDates.selectedMonth,
        addonsCount: state.addons.addonsCount
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        updatedProductsOfUser: (product, timingSelected, dateSelected, month, variantIndex, update, index) => dispatch(updatedProductsOfUser(product, timingSelected, dateSelected, month, variantIndex, update, index)),
        resetAddons: () => dispatch(resetAddons())
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(FagitoModalComponent);