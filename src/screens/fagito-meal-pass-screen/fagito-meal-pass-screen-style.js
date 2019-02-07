import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    noMealPassSection: {
        paddingLeft: 16,
        paddingTop: 19
    },
    noMealpassMessage: {
        color: style.FAGITO_BLACK_COLOR,
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    },
    mealPassSection: {
        flex:1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    }
});

export { STYLES };