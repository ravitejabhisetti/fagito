import * as style from './fagito-style-constants';
import { StyleSheet } from 'react-native';

export const FAGITO_COMMON_STYLE = {
    headerStyle: {
        backgroundColor: style.FAGITO_BUTTON_COLOR
    },
    headerTintColor: style.FAGITO_WHITE_COLOR,
    headerTitleStyle: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 16,
        paddingLeft: 20,
        fontWeight: '400'
    }
}

export const FAGITO_SIGNIN_SIGNUP_CONTAINERS = StyleSheet.create({
    signupSigninContainer: {
        backgroundColor: style.FAGITO_WHITE_COLOR,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: 0
    }
});

export const CONTAINER_STYLE = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    }
})

export const OVERLAY_STYLE = StyleSheet.create({
    overlay: {
        position: style.FAGITO_POSITION_ABSOLUTE,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems: style.FAGITO_CENTER,
        justifyContent: style.FAGITO_CENTER,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1000
    }
})