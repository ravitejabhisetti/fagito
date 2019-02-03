import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    paymentSection: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    moneyButtonsSection: {
        flexWrap: style.FAGITO_WRAP,
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_SPACE_BETWEEN
    },
    moneyButton: {
        flexBasis: "33%",
        width: 80,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
    amountSubmitButton: {
        paddingTop: 20
    },
    currentWalletAmount: {
        margin: 16,
        paddingBottom: 8,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
        borderBottomWidth: 1
    },
    amountText: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 14,
        color: style.FAGITO_ERROR_TEXT_COLOR
    }
});

export { STYLES };