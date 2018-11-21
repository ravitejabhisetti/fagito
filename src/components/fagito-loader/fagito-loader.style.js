import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    fagitoLoader: {
        position: style.FAGITO_POSITION_ABSOLUTE,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems: style.FAGITO_CENTER,
        justifyContent: style.FAGITO_CENTER,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1000
    },
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