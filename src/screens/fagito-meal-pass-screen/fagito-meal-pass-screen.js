import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BackIcon } from '../../components/fagito-components';
import { MEALPASS_TITLE, FAGITO_HOME_SCREEN, NO_MEALPASS_MESSAGE } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import { STYLES } from './fagito-meal-pass-screen-style';

class FagitoMealPassScreen extends Component {
    render() {
        return (
            <View style={STYLES.mealPassSection}>
                <BackIcon borderWidth={1} borderColor={style.TAB_TOP_BORDER_COLOR} iconColor={style.FAGITO_BLACK_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.TAB_TOP_BACKGROUND} title={MEALPASS_TITLE} />
                <View style={STYLES.noMealPassSection}>
                    <Text style={STYLES.noMealpassMessage}>{NO_MEALPASS_MESSAGE}</Text>
                </View>
            </View>
        )
    }
}

export default FagitoMealPassScreen;