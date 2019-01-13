import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    footerSegment: {
        minHeight: 45,
        backgroundColor: style.FAGITO_BUTTON_COLOR,
        paddingLeft: 16,
        justifyContent: style.FAGITO_FLEX_START,
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER
    },
    footerText: {
        color: style.FAGITO_WHITE_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 14,
        flexWrap: style.FAGITO_WRAP,
        fontWeight: '400'
    },
    costsSegment: {
        flex: 1,
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER,
        justifyContent: style.FAGITO_SPACE_BETWEEN,
        marginRight: 5
    },
    paymentText: {
        flex:1,
        paddingRight: 3
    },
    addonMessage: {
        color: style.FAGITO_WHITE_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontWeight: '700'
    }
})

export { STYLES };