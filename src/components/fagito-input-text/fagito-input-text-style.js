import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const FAGITO_TEXT_INPUT_TOP_RANGE = {
    inputRange: [0, 1],
    outputRange: [24, 0]
}

const FAGITO_TEXT_INPUT_FONT_RANGE = {
    inputRange: [0, 1],
    outputRange: [16, 12]
}

const FAGITO_TEXT_INPUT_COLOR_RANGE = {
    inputRange: [0, 1],
    outputRange: [style.FAGITO_TEXT_INPUT_GREY_BORDER_COLOR, style.FAGITO_BUTTON_COLOR]
}

const FAGITO_TEXT_INPUT_CONTAINER = StyleSheet.create({
    textInputContainer: {
        paddingTop: 24
    },
    textInput: {
        padding: 0,
        margin: 0,
        borderBottomWidth: 1,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        height: 30,
        fontSize: 18
    },
    greyColor: {
        borderColor: style.FAGITO_TEXT_INPUT_GREY_BORDER_COLOR
    },
    redColor: {
        borderColor: style.FAGITO_BUTTON_COLOR
    }
})

const FAGITO_TEXT_INPUT_GREY_COLOR = StyleSheet.create({

})

export {
    FAGITO_TEXT_INPUT_COLOR_RANGE,
    FAGITO_TEXT_INPUT_FONT_RANGE,
    FAGITO_TEXT_INPUT_TOP_RANGE,
    FAGITO_TEXT_INPUT_CONTAINER
}