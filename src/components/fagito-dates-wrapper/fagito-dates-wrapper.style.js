import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    datesWrapperContainer: {
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_SPACE_BETWEEN,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 6,
        borderBottomWidth: 0.2,
        borderBottomColor: style.GREY_COLOR
    }
})

export { STYLES };