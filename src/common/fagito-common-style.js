import * as style from './fagito-style-constants';
import { StyleSheet } from 'react-native';

export const FAGITO_COMMON_STYLE = {
    headerStyle: {
        backgroundColor: style.FAGITO_BUTTON_COLOR
    },
    headerTintColor: style.FAGITO_WHITE_COLOR,
    headerTitleStyle: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 16
    }
}

export const FAGITO_SIGNIN_SIGNUP_CONTAINERS = StyleSheet.create({
    signupSigninContainer: {
        backgroundColor: style.FAGITO_WHITE_COLOR,
        padding: 16,
        marginTop: 0
    }
});

export const CONTAINER_STYLE = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    }
})