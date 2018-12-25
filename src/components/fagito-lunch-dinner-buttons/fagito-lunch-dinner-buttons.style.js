import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    segmentButton: {
        borderColor: style.FAGITO_BUTTON_COLOR,
        borderStyle: style.FAGITO_SOLID_BORDER_STYLE,
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 5,
        width: '30%',
        alignItems: style.FAGITO_CENTER,
        color: 'yellow'
    },
    lunchSegmentButton: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 4
    },
    dinnerSegmentButton: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 0
    },
    segmentButtonWhiteBackgroundColor: {
        backgroundColor: style.FAGITO_WHITE_COLOR
    },
    segmentButtonRedBackgroundColor: {
        backgroundColor: style.FAGITO_BUTTON_COLOR
    },
    segmentButtonTextRedColor: {
        color: style.FAGITO_BUTTON_COLOR
    },
    segmentButtonTextWhiteColor: {
        color: style.FAGITO_WHITE_COLOR
    }
});

export { STYLES };