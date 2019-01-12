import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { STYLES } from './fagito-bottom-modal.style';
import { BOTTOM_MODAL_HEADER_SECTION_ONE, BOTTOM_MODAL_HEADER_SECTION_TWO, REMOVE_SELECTION, ADDONS } from "../../common/fagito-constants";

class FagitoBottomModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let timing = this.props.selectedProduct && this.props.selectedProduct.timingSelected;
        return (
            <View>
                <Modal
                    onBackdropPress={() => this.props.hideBottomModal(false)}
                    animationOutTiming={1000}
                    backdropOpacity={0.26}
                    backdropTransitionOutTiming={1000}
                    isVisible={this.props.showModal}
                    style={STYLES.bottomModal}
                >
                    <View style={STYLES.modalContent}>
                        <Text style={STYLES.bottomModalHeader}>{BOTTOM_MODAL_HEADER_SECTION_ONE}{timing}{BOTTOM_MODAL_HEADER_SECTION_TWO}{this.props.selectedDay}?</Text>
                        <TouchableOpacity onPress={() => this.props.removeProduct()} style={STYLES.modalAction}><Text style={STYLES.modalText}>{REMOVE_SELECTION}</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.showAddonsModal()} style={STYLES.modalAction}><Text style={STYLES.modalText}>{ADDONS}</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.hideBottomModal(false)} style={STYLES.modalAction}><Text style={STYLES.modalText}>Cancel</Text></TouchableOpacity>
                    </View>
                </Modal>

            </View>
        );
    }
}

export default FagitoBottomModal;
