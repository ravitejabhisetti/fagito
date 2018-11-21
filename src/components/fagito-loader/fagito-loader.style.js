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
        backgroundColor: 'rgba(0,0,0,0.25)',
        zIndex: 1000
    },
    fagitoLoaderContainer: {
        padding: 20,
        backgroundColor: style.FAGITO_WHITE_COLOR,
        color: 'black'
    },
    loaderColor: {
        color: 'black'
    }
});

export { STYLES };