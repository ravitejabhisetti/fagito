import React, { Component } from 'react';
import { View, Text, Modal, BackHandler, StyleSheet, TouchableHighlight } from 'react-native';
import { STYLES } from './fagito-modal.style';
import { ANDROID_HARDWARE_BACK_PRESS, ORDERS, SIMILAR_MEAL } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import RadioForm from 'react-native-simple-radio-button';

class FagitoModalComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        modalVisible: true,
    }
    toggleModal = () => {
        this.props.hideModal();
    }
    componentWillMount() {
        if (!this.props.modalContent.type) {
            this.props.modalContent.variants.map((variant, variantIndex) => {
                variant.label = variant.name + ' - Rs. ' + variant.price;
            });
        }
    }
    handleVariant = (value, index) => {

    }
    render() {
        let modalContentSegment = null;
        let modalHeading = null;
        this.state.modalVisible = this.props.showModal;
        let headerTextColor = this.props.modalContent.type === ORDERS ? STYLES.modalTextHeaderWhiteColor : STYLES.modalTextHeaderGreyColor;
        if (this.props.modalContent.type === ORDERS) {
            modalHeading = this.props.modalContent.modalHeader;
            modalContentSegment = (
                <View style={STYLES.modalContentSegment}>
                    <Text style={STYLES.modalMessageText}>{this.props.modalContent.modalMessage}</Text>
                </View>
            )
        } else {
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
            }
        }
        return (
            <View>
                <Modal animationType={"fade"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={this.toggleModal}>
                    <View style={STYLES.modal}>
                        <View style={[STYLES.modalHeader,
                        this.props.modalContent.type === ORDERS ? STYLES.modalHeaderOrdersBackground : STYLES.modalContent]}>
                            <View>
                                <Text style={[STYLES.modalText, STYLES.modalHeading, headerTextColor]}>{modalHeading}</Text>
                            </View>
                            <TouchableHighlight onPress={this.toggleModal} style={STYLES.modalCloseButton}>
                                <Text style={[STYLES.modalText, STYLES.modalCloseText, headerTextColor]}>CLOSE</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={STYLES.modalContent}>
                            {modalContentSegment}
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default FagitoModalComponent;