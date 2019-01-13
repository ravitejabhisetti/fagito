import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    addonSegment: {
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER,
        flex: 1
    },
    addonDetails: {
        marginLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16,
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_SPACE_BETWEEN,
        alignItems: style.FAGITO_CENTER,
        flex: 1
    },
    addonsSelected: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        color: '#858585',
        fontSize: 14,
        fontWeight: '400'
    },
    addonMinus: {
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: style.FAGITO_CENTER
    },
    addonDetailsBottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
    },
    addonName: {
        color: style.FAGITO_BLACK_COLOR,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    }
});

export { STYLES };