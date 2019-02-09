import { StyleSheet, Dimensions } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const window = Dimensions.get('window');

const STYLES = StyleSheet.create({
    freeMealsSection: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    imageSection: {
        height: window.height - 60,
        justifyContent: style.FAGITO_CENTER,
        alignItems: style.FAGITO_CENTER
    },
    freeMealMessage: {
        paddingTop: 12,
        fontSize: 17,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        justifyContent: style.FAGITO_CENTER,
        textAlign: style.FAGITO_CENTER,
        fontWeight: '400'
    },
    freeMealAmount: {
        fontWeight: '500'
    },
    referralSection: {
        backgroundColor: style.MEAL_PASS_REFERRAL_GREEN_COLOR,
        minHeight: 60,
        position: style.FAGITO_POSITION_ABSOLUTE,
        bottom: 0,
        width: "100%",
        flex: 1,
        paddingTop: 10
    },
    referralText: {
        color: style.FAGITO_WHITE_COLOR,
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        textAlign: style.FAGITO_CENTER,
        justifyContent: style.FAGITO_CENTER,
        alignItems: style.FAGITO_CENTER,
    },
    shareButtonSection: {
        justifyContent: style.FAGITO_CENTER,
        alignItems: style.FAGITO_CENTER,
        paddingTop: 8,
        paddingBottom: 30
    }
});

export { STYLES };