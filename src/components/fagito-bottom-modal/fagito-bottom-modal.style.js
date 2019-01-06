import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    modalContent: {
        backgroundColor: style.BOTTOM_MODAL_BACKGROUND_COLOR,
        paddingTop: 22,
        paddingLeft: 14,
        paddingRight: 14,
        width: '100%',
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
        justifyContent: style.FAGITO_FLEX_END,
        margin: 0
    },
    bottomModalHeader: {
        color: '#757575',
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 16,
        paddingBottom: 16
    },
    modalText: {
        color: '#222',
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 14
    },
    modalAction: {
        minHeight: 40
    }
});

export { STYLES };