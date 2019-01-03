import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    chefTagsContainer: {
        flexDirection: style.FAGITO_ROW
    },
    chefDot: {
        fontSize: 60,
        color: style.CHEF_TAG_COLOR,
    },
    chefDotSection: {
        marginTop: -44
    },
    chefTag: {
        marginTop: -28,
        paddingLeft: 15
    },
    tagColor: {
        color: style.CHEF_TAG_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    }
});

export { STYLES };