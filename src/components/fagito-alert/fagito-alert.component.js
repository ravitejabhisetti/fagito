import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, TouchableWithoutFeedback } from 'react-native';
import { STYLES } from './fagito-alert.style';
import { OVERLAY_STYLE } from '../../common/fagito-common-style';
import validate from '../../utility/fagito-error-messages';
import * as style from '../../common/fagito-style-constants';
import { connect } from 'react-redux';
import { fagitoHideAlert } from '../../store/actions/actions';

class FagitoAlert extends Component {
    state = {
        showAlert: true
    }
    handleAlert = () => {
        this.props.hideAlert();
    }
    handleSubmit = () => {
        this.props.hideAlert();
    }
    render() {
        let error = null;
        if (this.props.alertItems.error) {
            error = (
                <View>
                    <Text style={[STYLES.alertErrorText, STYLES.alertErrorHeader]}>Error</Text>
                    <Text style={[STYLES.alertErrorText, STYLES.alertErrorMessage]}>{validate(this.props.alertItems.error.message)}</Text>
                    <View style={STYLES.alertButtonsContainer}>
                        <View style={STYLES.alertSubmitButton}>
                            <TouchableOpacity onPress={this.handleSubmit} activeOpacity={style.FAGITO_BUTTON_OPACITY}>
                                <Text style={STYLES.buttonText}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
                 <TouchableWithoutFeedback onPress={() => this.handleAlert()}>
                    <View style={STYLES.alertContainer}>
                        <View style={STYLES.alertContent}>
                            {error}
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideAlert: () => dispatch(fagitoHideAlert())
    }
}

export default connect(null, mapDispatchToProps)(FagitoAlert);