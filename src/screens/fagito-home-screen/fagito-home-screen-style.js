import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    header: {
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    headerView: {
        flex: 1
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
    }
});

export { STYLES };