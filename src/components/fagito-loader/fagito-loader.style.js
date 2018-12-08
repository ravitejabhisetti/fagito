import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    fagitoLoaderContainer: {
        flexDirection: style.FAGITO_ROW,
        padding: 25,
        backgroundColor: style.FAGITO_WHITE_COLOR,
        justifyContent: style.FAGITO_SPACE_AROUND,
        alignItems: style.FAGITO_CENTER,
        borderRadius: 3
    },
    loaderText: {
        paddingLeft: 10,
        color: style.FAGITO_ERROR_TEXT_COLOR,
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    }
});

export { STYLES };