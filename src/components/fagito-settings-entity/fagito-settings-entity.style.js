import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    settingsEntity: {
        flexDirection: style.FAGITO_ROW,
        alignItems: style.FAGITO_CENTER
    },
    settingsEntityIcon: {
        paddingLeft: 12,
        paddingRight: 12,
        alignItems: style.FAGITO_CENTER,
    },
    settingsEntityDetails: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16,
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_SPACE_BETWEEN,
        alignItems: style.FAGITO_CENTER,
        flex: 1,
        marginLeft: 16

    },
    settingsEntityBottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR
    },
    entity: {
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        flexWrap: style.FAGITO_WRAP,
        paddingRight: 16
    },
    entityDetails: {
        color: style.FAGITO_ERROR_TEXT_COLOR
    }
});

export { STYLES };