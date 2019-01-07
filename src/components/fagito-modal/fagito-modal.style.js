import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    modal: {
        flex: 1
    },
    modalHeader: {
        minHeight: 56,
        padding: 8,
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER,
        justifyContent: style.FAGITO_SPACE_BETWEEN
    },
    modalHeaderOrdersBackground: {
        backgroundColor: style.FAGITO_BUTTON_COLOR
    },
    modalContent: {
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    modalCloseButton: {
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_FLEX_END,
        alignItems: style.FAGITO_CENTER
    },
    modalText: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
    },
    modalTextHeaderWhiteColor: {
        color: style.FAGITO_WHITE_COLOR
    },
    modalTextHeaderGreyColor: {
        color: '#222'
    },
    modalHeading: {
        fontSize: 20
    },
    modalCloseText: {
        paddingTop: 6,
        fontSize: 14
    },
    modalContentSegment: {
        paddingTop: 60,
        paddingBottom: 30,
        alignItems: style.FAGITO_CENTER
    },
    modalMessageText: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 22,
        color: style.FAGITO_BUTTON_COLOR
    }
});

export { STYLES };