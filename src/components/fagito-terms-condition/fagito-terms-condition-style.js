import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    linksColor: {
        color: style.FAGITO_BUTTON_COLOR,
        textDecorationLine: 'underline',
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    },
    termsColor: {
        color: '#666',
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    },
    termsViewContainer: {
        marginTop: 15
    }
})

export { STYLES };