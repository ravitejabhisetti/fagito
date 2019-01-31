import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    updateDetailsContainer: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    addressSection: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 16
    },
    locationEntity: {
        paddingTop: 5,
        paddingBottom: 12
    },
    locationDropdownSection: {
        paddingLeft: 16,
        paddingRight: 16
    },
    mandatoryFieldsMessage: {
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        paddingTop: 6,
        color: style.FAGITO_BUTTON_COLOR
    }
});

export { STYLES };