import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    walletSection: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    walletInfoText: {
        color: style.WALLET_TEXT_COLOR,
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    },
    walletInfoSection: {
        margin: 16
    },
    walletSegment: {
        paddingBottom: 12,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
        borderBottomWidth: 1
    }
})

export { STYLES };