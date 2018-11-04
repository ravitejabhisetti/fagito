import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: style.FAGITO_BUTTON_COLOR,
        backgroundColor: 'white',
        borderStyle: style.FAGITO_SOLID_BORDER_STYLE,
        padding: 8,
        alignItems: style.FAGITO_CENTER
    },
    buttonText: {
        color: style.FAGITO_BUTTON_COLOR
    },
    buttonContainer: {
        flex: 1
    }
})

export { STYLES };