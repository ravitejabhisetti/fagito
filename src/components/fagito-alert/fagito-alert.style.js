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
        padding: 20
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
        paddingRight: 5
    }
})

export { STYLES };