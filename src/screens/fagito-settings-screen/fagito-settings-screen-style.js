import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    settingsSection: {
        flex: 1,
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    profileSection: {
        margin: 16
    },
    profileText: {
        color: style.FAGITO_ERROR_TEXT_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        fontSize: 14
    },
    profileSegment: {
        paddingBottom: 12,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
        borderBottomWidth: 1
    }
});

export { STYLES };