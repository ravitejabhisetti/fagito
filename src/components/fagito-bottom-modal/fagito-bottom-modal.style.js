import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    modalContent: {
        backgroundColor: style.FAGITO_WHITE_COLOR,
        padding: 22,
        justifyContent: style.FAGITO_CENTER,
        alignItems: style.FAGITO_CENTER,
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
        justifyContent: style.FAGITO_FLEX_END,
        margin: 0
    }
});

export { STYLES };