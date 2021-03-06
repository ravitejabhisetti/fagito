import { StyleSheet, Dimensions } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const window = Dimensions.get('window');

const STYLES = StyleSheet.create({
    productSegment: {
        backgroundColor: style.FAGITO_WHITE_COLOR,
        flexBasis: window.width < 660 ? '33%' : '25%',
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 5
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'cover'
    },
    productName: {
        fontSize: 12,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        color: style.FAGITO_BLACK_COLOR,
        overflow: style.HIDDEN,
        height: 45,
        lineHeight: 13,
        marginTop: 4,
        marginRight: 0,
        marginBottom: 2,
        marginLeft: 0
    },
    icon: {
        height: 10,
        width: 10,
    },
    productPrice: {
        color: style.FAGITO_BLACK_COLOR,
        fontSize: 12,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        paddingTop: 8
    },
    addButton: {
        marginTop: 6,
        marginBottom: 6
    },
    soldOutText: {
        color: style.FAGITO_BUTTON_COLOR,
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO_LIGHT,
        fontWeight: '700'
    },
    productVariants: {
        alignItems: style.FAGITO_CENTER
    },
    variant: {
        color: 'rgb(85, 85, 85)',
        fontSize: 13,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        alignItems: style.FAGITO_CENTER
    }
});

export { STYLES };