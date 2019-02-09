import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';
import { STYLES } from './fagito-free-meal-screen-style';
import {
    FAGITO_HOME_SCREEN, FREE_MEAL_TITLE, FREE_MEAL_MESSAGE_1,
    FREE_MEAL_MESSAGE_2, FREE_MEAL_AMOUNT, REFERRAL_CODE_MESSAGE, REFERRAL_CODE
} from '../../common/fagito-constants';
import { BackIcon, FagitoButton } from '../../components/fagito-components';
import * as style from '../../common/fagito-style-constants';

class FagitoFreeMealScreen extends Component {
    shareMessage = () => {
        Share.share({ message: 'check the message sharing....', title: 'Complete action using...' })
            .then(result => { })
            .catch(errorMsg => { });
    }
    render() {
        let imageSource = require('../../assets/referandearn.png');
        return (
            <View style={STYLES.freeMealsSection}>
                <BackIcon borderWidth={1} borderColor={style.TAB_TOP_BORDER_COLOR} iconColor={style.FAGITO_BLACK_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.TAB_TOP_BACKGROUND} title={FREE_MEAL_TITLE} />
                <View style={STYLES.imageSection}>
                    <Image source={imageSource}></Image>
                    <Text style={STYLES.freeMealMessage}>{FREE_MEAL_MESSAGE_1} <Text style={STYLES.freeMealAmount}>{FREE_MEAL_AMOUNT}</Text> {FREE_MEAL_MESSAGE_2}</Text>
                    <TouchableOpacity activeOpacity={1} style={STYLES.referralSection}>
                        <Text style={STYLES.referralText}>{REFERRAL_CODE_MESSAGE}</Text>
                        <Text style={STYLES.referralText}>{REFERRAL_CODE}</Text>
                        <View style={STYLES.shareButtonSection}>
                            <FagitoButton
                                onButtonClick={() => this.shareMessage()}
                                borderColor={style.FAGITO_WHITE_COLOR}
                                backgroundColor={style.MEAL_PASS_REFERRAL_GREEN_COLOR}
                                buttonTitle='SHARE'></FagitoButton>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default FagitoFreeMealScreen;