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
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_CENTER
    },
    chefTag: {
        paddingLeft: 1,
        marginLeft: -5
    },
    chefDotIcon: {
        marginLeft: -5
    },
    tagColor: {
        color: style.CHEF_TAG_COLOR,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    }
});

export { STYLES };