import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { STYLES } from './fagito-bottom-modal.style';
import {
    BOTTOM_MODAL_HEADER_SECTION_ONE, BOTTOM_MODAL_HEADER_SECTION_TWO, REMOVE_SELECTION,
    ADDONS, MODIFY_ADDONS, REMOVE_ADDONS
} from "../../common/fagito-constants";
import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/actions';

class FagitoBottomModal extends Component {
    constructor(props) {
        super(props);
    }
    removeAddonsOfProduct = () => {
        this.props.hideBottomModal(false);
        this.props.updateUser(this.props.selectedProduct, [], 'addons');
    }
    render() {
        let addAddons = null;
        let modifyAddons = null;
        let removeAddons = null;
        let timing = this.props.selectedProduct && this.props.selectedProduct.timingSelected;
        if (this.props.selectedProduct && (!this.props.selectedProduct.addons || (this.props.selectedProduct.addons && this.props.selectedProduct.addons.length === 0))) {
            addAddons = (
                <TouchableOpacity onPress={() => this.props.showAddonsModal()} style={STYLES.modalAction}><Text style={STYLES.modalText}>{ADDONS}</Text></TouchableOpacity>
            )
            modifyAddons = null;
            removeAddons = null;
        }
        if (this.props.selectedProduct && this.props.selectedProduct.addons && this.props.selectedProduct.addons.length > 0) {
            addAddons = null;
            modifyAddons = (
                <TouchableOpacity onPress={() => this.props.showAddonsModal()} style={STYLES.modalAction}><Text style={STYLES.modalText}>{MODIFY_ADDONS}</Text></TouchableOpacity>
            )
            removeAddons = (
                <TouchableOpacity onPress={() => this.removeAddonsOfProduct()} style={STYLES.modalAction}><Text style={STYLES.modalText}>{REMOVE_ADDONS}</Text></TouchableOpacity>
            )
        }
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
                        {addAddons}
                        {modifyAddons}
                        {removeAddons}
                        <TouchableOpacity onPress={() => this.props.hideBottomModal(false)} style={STYLES.modalAction}><Text style={STYLES.modalText}>Cancel</Text></TouchableOpacity>
                    </View>
                </Modal>

            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (product, addonsSelected, updateType) => dispatch(updateUser(product, addonsSelected, updateType))
    }
}

export default connect(null, mapDispatchToProps)(FagitoBottomModal);
