import { StyleSheet, Dimensions } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const window = Dimensions.get('window');

const STYLES = StyleSheet.create({
    freeMealsSection: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    imageSection: {
        height: window.height - 60,
        justifyContent: style.FAGITO_CENTER,
        alignItems: style.FAGITO_CENTER
    }
});

export { STYLES };