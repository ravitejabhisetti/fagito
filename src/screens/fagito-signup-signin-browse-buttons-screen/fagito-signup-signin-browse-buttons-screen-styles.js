import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    fagitoLogo: {
        color: style.FAGITO_WHITE_COLOR,
        fontSize: 40,
        fontFamily: 'Quicksand-Bold'
    },
    logo: {
        backgroundColor: style.FAGITO_BACKGROUND_COLOR,
        height: "70%",
        alignItems: style.FAGITO_CENTER,
        flexDirection: style.FAGITO_COLUMN,
        justifyContent: style.FAGITO_CENTER
    },
    buttonsContainer: {
        height: "30%"
    },
    fagitoLogoMessage: {
        fontSize: 18,
        color: style.FAGITO_TEXT_COLOR,
        maxWidth: 320,
        textAlign: style.FAGITO_CENTER,
        marginLeft: style.FAGITO_AUTO,
        marginRight: style.FAGITO_AUTO,
        padding: 10,
        fontFamily: 'Lato-Regular'
    }
})

export { STYLES };