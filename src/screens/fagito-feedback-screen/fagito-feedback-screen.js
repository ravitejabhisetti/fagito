import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-feedback-screen-style';
import { FagitoModalComponent } from '../../components/fagito-components';
import { FEEDBACK_MODAL, FAGITO_HOME_SCREEN } from '../../common/fagito-constants';

class FagitoFeedbackScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        }
    }
    handleModal = () => {
        this.setState((state) => {
            return {
                ...state,
                showModal: false
            }
        })
        this.props.navigation.navigate(FAGITO_HOME_SCREEN);
    }
    render() {
        return (
            <View style={STYLES.feedbackSection}>
                <FagitoModalComponent
                    type={FEEDBACK_MODAL}
                    hideModal={() => this.handleModal()}
                    showModal={this.state.showModal}></FagitoModalComponent>
            </View>
        )
    }
}

export default FagitoFeedbackScreen;