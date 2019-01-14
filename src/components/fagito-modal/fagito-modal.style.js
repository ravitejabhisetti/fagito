import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    modal: {
        flex: 1,
        zIndex: 999
    },
    modalHeader: {
        minHeight: 56,
        padding: 10,
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER,
        justifyContent: style.FAGITO_SPACE_BETWEEN,
        borderColor: '#b2b2b2',
        borderBottomWidth: 1,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        elevation: 3,
        zIndex: 999,
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
        color: '#424242'
    },
    modalHeading: {
        fontSize: 18,
        paddingTop: 6
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
    },
    radioOptionLabel: {
        fontSize: 16,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        paddingRight: 4,
        marginRight: 4
    },
    radioButton: {
        paddingBottom: 15,
        paddingTop: 15,
        alignItems: style.FAGITO_CENTER,
        paddingRight: 6,
        paddingLeft: 6,
        borderBottomWidth: 1,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
        marginLeft: 2,
        marginRight: 2
    },
    addonNote: {
        color: style.FAGITO_BLACK_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 14,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8,
        flex: 1,
        flexWrap: style.FAGITO_WRAP
    }
});

export { STYLES };