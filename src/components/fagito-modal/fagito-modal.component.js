import React, { Component } from 'react';
import { View, Text, Modal, BackHandler, StyleSheet, TouchableHighlight } from 'react-native';
import { STYLES } from './fagito-modal.style';
import { ANDROID_HARDWARE_BACK_PRESS, ORDERS } from '../../common/fagito-constants';

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
            modalHeading = 'Choose a similar meal';
            modalContentSegment = (
                <Text>{this.props.modalContent.base.name}</Text>
            )
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