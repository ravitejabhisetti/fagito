import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    footerSegment: {
        height: 45,
        backgroundColor: style.FAGITO_BUTTON_COLOR,
        paddingLeft: 16,
        justifyContent: style.FAGITO_FLEX_START,
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER
    },
    footerText: {
        color: style.FAGITO_WHITE_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 14
    }
})

export { STYLES };