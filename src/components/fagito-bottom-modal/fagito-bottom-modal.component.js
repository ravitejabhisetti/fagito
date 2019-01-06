import React, { Component } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { STYLES } from './fagito-bottom-modal.style';

class FagitoBottomModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                        <Text>Hello!</Text>
                    </View>
                </Modal>

            </View>
        );
    }
}

export default FagitoBottomModal;
