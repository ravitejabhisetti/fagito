import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BackIcon, FagitoFormComponent, FagitoButton } from '../../components/fagito-components';
import {
    OFFERS_TITLE, FAGITO_HOME_SCREEN, OFFERS_FORM,
    OFFERS_FORM_ENTITIES, APPLY_COUPON, OFFER_ALERT
} from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import { STYLES } from './fagito-offers-screen-style';
import { fagitoShowAlert } from '../../store/actions/actions';
import { connect } from 'react-redux';

class FagitoOffersScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offersForm: OFFERS_FORM_ENTITIES,
            buttonInActive: true
        }
    }
    updateOffersForm = (value) => {
        if (value === '') {
            this.setState((state) => {
                return {
                    ...state,
                    buttonInActive: true
                }
            })
        }
        if (this.state.buttonInActive && value !== '') {
            this.setState((state) => {
                return {
                    ...state,
                    buttonInActive: false
                }
            })
        }
    }

    applyOffer = () => {
        if (!this.state.buttonInActive) {
            this.props.showOfferAlert(OFFER_ALERT);
        }
    }
    render() {
        let offersForm = null;
        let offersSubmitButton = null;
        return (
            <View style={STYLES.offersSection}>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={OFFERS_TITLE} />
                <View>
                    <FagitoFormComponent
                        hideSubmitButton
                        form={OFFERS_FORM}
                        amountForm
                        newForm
                        updateAmountForm={(value) => this.updateOffersForm(value)}
                        formItems={this.state.offersForm}>
                    </FagitoFormComponent>
                    <View style={STYLES.offersButtonSection}>
                        <FagitoButton
                            onButtonClick={() => this.applyOffer()}
                            buttonInActive={this.state.buttonInActive}
                            borderColor={style.FAGITO_WHITE_COLOR}
                            backgroundColor={this.state.buttonInActive ? style.SODEXO_INACTIVE_BUTTON : style.SODEXO_ACTIVE_BUTTON}
                            buttonTitle={APPLY_COUPON}>
                        </FagitoButton>
                    </View>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showOfferAlert: (alert) => dispatch(fagitoShowAlert(alert))
    }
}

export default connect(null, mapDispatchToProps)(FagitoOffersScreen);