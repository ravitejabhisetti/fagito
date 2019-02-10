import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    headerSegment: {
        minHeight: 75,
        backgroundColor: style.FAGITO_BLACK_COLOR,
        justifyContent: style.FAGITO_CENTER,
        padding: 15
    },
    headerTitle: {
        flex: 1,
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_FLEX_START
    },
    headerText: {
        color: style.FAGITO_WHITE_COLOR,
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 2,
        marginBottom: 15,
        minHeight: 30
    },
    logoutText: {
        fontSize: 13,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO_LIGHT,
        fontWeight: '400',
        paddingLeft: 16,
        paddingTop: 12
    },
    balanceText: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 12,
        color: style.FAGITO_WHITE_COLOR
    }
});

export { STYLES };