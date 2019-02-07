import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { STYLES } from './fagito-free-meal-screen-style';
import { FAGITO_HOME_SCREEN, FREE_MEAL_TITLE, MEAL_PASS_MESSAGE } from '../../common/fagito-constants';
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
                    <Text>{MEAL_PASS_MESSAGE}</Text>
                </View>
            </View>
        )
    }
}

export default FagitoFreeMealScreen;