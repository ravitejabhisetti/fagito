import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    productSegment: {
        backgroundColor: style.FAGITO_WHITE_COLOR,
        flexBasis: '33%',
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 0
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
        marginBottom: 20
    }
});

export { STYLES };