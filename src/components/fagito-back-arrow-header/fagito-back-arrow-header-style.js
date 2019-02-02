import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    headerStyle: {
        height: 60,
        padding: 18,
        justifyContent: style.FAGITO_CENTER
    },
    headerAlign: {
        flex: 1,
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER
    },
    headerText: {
        paddingLeft: 25,
        paddingTop: 2,
    },
    title: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 16
    },
    iosIconStyle: {
        marginTop: 4
    }
});

export { STYLES };