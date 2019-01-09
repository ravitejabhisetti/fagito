import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderStyle: style.FAGITO_SOLID_BORDER_STYLE,
        padding: 4,
        alignItems: style.FAGITO_CENTER
    },
    buttonContainer: {
        flex: 1
    },
    buttonText: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    }
})

export { STYLES };