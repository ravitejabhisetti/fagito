import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    chefSection: {
        borderBottomColor: style.CHEF_BORDER_COLOR,
        borderBottomWidth: 1,
        borderStyle: style.FAGITO_SOLID_BORDER_STYLE,
        padding: 5,
    },
    chefName: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        color: style.FAGITO_BLACK_COLOR
    }
})

export { STYLES };