import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    dateContainer: {
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_CENTER,
        display: 'flex'
    },
    textCenter: {
        alignItems: style.FAGITO_CENTER,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO
    },
    dateSegment: {
        height: 51,
        minWidth: 50
    },
    dayFont: {
        fontSize: 10
    },
    dateFont: {
        fontSize: 15
    },
    tomorrowFont: {
        fontSize: 8
    },
    daySelected: {
        color: style.FAGITO_SELECTED_DATE_GREEN_COLOR
    },
    dayUnselected: {
        color: style.GREY_COLOR
    },
    dateSelected: {
        color: style.FAGITO_SELECTED_DATE_GREEN_COLOR
    },
    dateUnselected: {
        color: style.GREY_COLOR
    }
})

export { STYLES };