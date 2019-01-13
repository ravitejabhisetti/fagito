import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    addonSectionName: {
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        color: '#858585',
        fontSize: 14,
        fontWeight: '400'
    },
    sectionNameSegment: {
        paddingLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
        paddingTop: 14,
        paddingBottom: 14
    }
});

export { STYLES };