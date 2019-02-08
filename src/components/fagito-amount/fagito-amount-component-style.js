import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    amountSection: {
        flexDirection: style.FAGITO_ROW,
        marginLeft: 12,
        marginRight: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
        justifyContent: style.FAGITO_SPACE_BETWEEN,
        alignItems: style.FAGITO_CENTER,
        paddingBottom: 8,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
        borderBottomWidth: 1

    },
    amountText: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 14,
        color: style.FAGITO_ERROR_TEXT_COLOR
    }
});

export { STYLES };