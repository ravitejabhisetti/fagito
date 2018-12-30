import React, { Component } from 'react';
import { View, Text, Modal, BackHandler, StyleSheet, TouchableHighlight } from 'react-native';
import { STYLES } from './fagito-modal.style';
import { ANDROID_HARDWARE_BACK_PRESS } from '../../common/fagito-constants';

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
        this.state.modalVisible = this.props.showModal;
        return (
            <View>
                <Modal animationType={"fade"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={this.toggleModal}>
                    <View style={STYLES.modal}>
                        <View style={STYLES.modalHeader}>
                            <View>
                                <Text style={[STYLES.modalText, STYLES.modalHeading]}>{this.props.modalContent.modalHeader}</Text>
                            </View>
                            <TouchableHighlight onPress={this.toggleModal} style={STYLES.modalCloseButton}>
                                <Text style={[STYLES.modalText, STYLES.modalCloseText]}>CLOSE</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={STYLES.modalContent}>
                            <View style={STYLES.modalContentSegment}>
                                <Text style={STYLES.modalMessageText}>{this.props.modalContent.modalMessage}</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default FagitoModalComponent;