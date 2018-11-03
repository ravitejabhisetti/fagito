import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    fagitoLogo: {
        color: style.FAGITO_WHITE_COLOR,
        fontSize: 36,
        fontFamily: 'Quicksand-Bold'
    },
    logo: {
        backgroundColor: style.FAGITO_BACKGROUND_COLOR,
        height: "80%",
        alignItems: style.FAGITO_CENTER,
        flexDirection: style.FAGITO_COLUMN,
        justifyContent: style.FAGITO_CENTER
    }
})

export { STYLES };