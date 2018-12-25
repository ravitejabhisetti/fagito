import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    header: {
        backgroundColor: style.FAGITO_WHITE_COLOR,
        borderBottomWidth: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation: 0
    },
    headerView: {
        flex: 1,
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_SPACE_BETWEEN,
        alignItems: style.FAGITO_CENTER,
        borderBottomWidth: 0
    },
    headerIcon: {
        alignItems: style.FAGITO_FLEX_START,
        justifyContent: style.FAGITO_CENTER,
        padding: 8
    },
    homeView: {
        flex: 1
    },
    homeViewContent: {
        backgroundColor: style.FAGITO_WHITE_COLOR,
        flex: 1
    },
    buttonsSegment: {
        flex: 1,
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER,
        justifyContent: style.FAGITO_CENTER,
    }
});

export { STYLES };