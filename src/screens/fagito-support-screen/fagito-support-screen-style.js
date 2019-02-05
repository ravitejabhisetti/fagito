import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    supportSection: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    contactSection: {
        margin: 16
    },
    contactText: {
        color: style.FAGITO_ERROR_TEXT_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 14
    },
});

export { STYLES };