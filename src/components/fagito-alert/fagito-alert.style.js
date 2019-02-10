import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    alertContainer: {
        flex: 1,
        alignItems: style.FAGITO_CENTER,
        justifyContent: style.FAGITO_CENTER
    },
    alertContent: {
        minWidth: 250,
        maxWidth: 280,
        borderRadius: 2,
        maxHeight: '90%',
        backgroundColor: style.FAGITO_WHITE_COLOR,
    },
    alertErrorText: {
        color: style.FAGITO_BLACK_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    },
    alertErrorHeader: {
        fontSize: 22,
        paddingBottom: 6
    },
    alertErrorMessage: {
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 10
    },
    alertButtonsContainer: {
        paddingTop: 15
    },
    alertSubmitButton: {
        alignItems: 'flex-end'
    },
    buttonText: {
        color: style.FAGITO_BUTTON_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        padding: 15,
    },
    buttonsSegment: {
        width: "100%",
        borderTopWidth: 0.5,
        borderTopColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_FLEX_END
    },
    headerSegment: {
        paddingTop: 24,
        paddingRight: 24,
        paddingBottom: 20,
        paddingLeft: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR
    },
    headerTitle: {
        textAlign: 'left',
        fontSize: 22,
        color: style.FAGITO_BLACK_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    },
    headerDescription: {
        fontSize: 14,
        color: style.FAGITO_BLACK_COLOR,
        marginTop: 5,
        marginBottom: 2
    },
    dropdownOptionsSection: {
        maxHeight: 240,
        flexGrow: 0,
        padding: 10,
    },
    radioOptionLabel: {
        fontSize: 12,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        justifyContent: style.FAGITO_CENTER,
        alignItems: style.FAGITO_CENTER,
        paddingRight: 4,
    },
    radioButton: {
        alignItems: style.FAGITO_CENTER,
        paddingTop: 2,
        paddingBottom: 2
    },
    errorMessageSection: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})

export { STYLES };