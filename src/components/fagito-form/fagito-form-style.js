import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    formButton: {
        marginTop: 70
    },
    termsText: {
        color: '#666',
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    },
    resetPassword: {
        alignItems: style.FAGITO_CENTER,
        marginTop: 20
    },
    resetPasswordText: {
        color: style.FAGITO_BUTTON_COLOR
    }
})

export { STYLES };