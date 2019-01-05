import { StyleSheet, Dimensions } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const window = Dimensions.get('window');

const STYLES = StyleSheet.create({
    selectedProductSegment: {
        flexBasis: window.width < 660 ? '48%' : '32%',
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 8,
        borderRadius: 8,
        paddingRight: 6,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 8,
        height: 'auto'
    },
    lunchProductSelectedBackground: {
        backgroundColor: 'rgba(245,166,35,.25)'
    },
    dinnerProductSelectedBackground: {
        backgroundColor: 'rgba(76,104,163,.25)'
    },
    selectedProductChef: {
        color: style.FAGITO_BLACK_COLOR,
        fontWeight: '700',
        fontSize: 12
    },
    selectedProductName: {
        color: style.TIMING_SELECTED_COLOR,
        fontSize: 12,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontWeight: '400'
    },
    selectedProductPrice: {
        color: style.SELECTED_PRODUCT_PRICE_COLOR,
        fontSize: 12,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        paddingTop: 4,
        paddingBottom: 4,
        fontWeight: '400'
    },
    timingSelected: {
        color: style.TIMING_SELECTED_COLOR,
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        paddingLeft: 4
    },
    timingRow: {
        flexDirection: style.FAGITO_ROW
    },
    moreIcon: {
        position: style.FAGITO_POSITION_ABSOLUTE,
        right: 3
    },
    insufficientBalance: {
        backgroundColor: style.FAGITO_BUTTON_COLOR,
        color: style.FAGITO_WHITE_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 12,
        paddingTop: 1,
        paddingLeft: 4,
        paddingRight: 4,
        paddingRight: 1,
        maxWidth: 115
    }
});

export { STYLES };