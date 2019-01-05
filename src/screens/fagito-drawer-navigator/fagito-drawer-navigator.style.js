import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    headerSegment: {
        height: 60,
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
        paddingBottom: 2,
        paddingTop: 6
    }
});

export { STYLES };