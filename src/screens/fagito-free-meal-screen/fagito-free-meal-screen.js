import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { STYLES } from './fagito-free-meal-screen-style';
import {
    FAGITO_HOME_SCREEN, FREE_MEAL_TITLE, FREE_MEAL_MESSAGE_1,
    FREE_MEAL_MESSAGE_2, FREE_MEAL_AMOUNT, REFERRAL_CODE_MESSAGE, REFERRAL_CODE
} from '../../common/fagito-constants';
import { BackIcon } from '../../components/fagito-components';
import * as style from '../../common/fagito-style-constants';

class FagitoFreeMealScreen extends Component {
    render() {
        let imageSource = require('../../assets/referandearn.png');
        return (
            <View style={STYLES.freeMealsSection}>
                <BackIcon borderWidth={1} borderColor={style.TAB_TOP_BORDER_COLOR} iconColor={style.FAGITO_BLACK_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.TAB_TOP_BACKGROUND} title={FREE_MEAL_TITLE} />
                <View style={STYLES.imageSection}>
                    <Image source={imageSource}></Image>
                    <Text style={STYLES.freeMealMessage}>{FREE_MEAL_MESSAGE_1} <Text style={STYLES.freeMealAmount}>{FREE_MEAL_AMOUNT}</Text> {FREE_MEAL_MESSAGE_2}</Text>
                    <View style={STYLES.referralSection}>
                        <Text style={STYLES.referralText}>{REFERRAL_CODE_MESSAGE}</Text>
                        <Text style={STYLES.referralText}>{REFERRAL_CODE}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default FagitoFreeMealScreen;