import { StyleSheet, Dimensions } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const window = Dimensions.get('window');

const STYLES = StyleSheet.create({
    home: {
        flex: 1
    },
    fagitoLogo: {
        color: style.FAGITO_WHITE_COLOR,
        fontSize: 40,
        fontFamily: 'Quicksand-Bold'
    },
    logo: {
        backgroundColor: style.FAGITO_BACKGROUND_COLOR,
        height: window.height - style.FAGITO_BUTTON_CONTAINERS_HEIGHT,
        alignItems: style.FAGITO_CENTER,
        flexDirection: style.FAGITO_COLUMN,
        justifyContent: style.FAGITO_CENTER
    },
    buttonsContainer: {
        height: style.FAGITO_BUTTON_CONTAINERS_HEIGHT,
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    fagitoLogoMessage: {
        fontSize: 18,
        color: style.FAGITO_TEXT_COLOR,
        maxWidth: 320,
        textAlign: style.FAGITO_CENTER,
        marginLeft: style.FAGITO_AUTO,
        marginRight: style.FAGITO_AUTO,
        padding: 10,
        fontFamily: 'Lato-Regular',
        marginTop: "1%"
    },
    buttonsSection: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: "2%"
    },
    signupSigninBtnsSection: {
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_SPACE_BETWEEN,
        marginTop: 20
    },
    button: {
        width: "48%"
    }
})

export { STYLES };