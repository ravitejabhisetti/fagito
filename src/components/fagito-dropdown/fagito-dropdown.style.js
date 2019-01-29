import { StyleSheet, Dimensions } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const windows = Dimensions.get('window');

const STYLES = StyleSheet.create({
    dropdownSegment: {

    },
    dropdownLabelPadding: {
        paddingBottom: 10
    },
    dropdownGreyBorder: {
        borderBottomColor: style.DROPDOWN_BORDER_BOTTOM_COLOR,
        borderBottomWidth: 0.5
    },
    dropdownIcon: {
        flexDirection: style.FAGITO_ROW,
        justifyContent: style.FAGITO_FLEX_END,
    },
    dropdownValue: {
        left: 0,
        position: style.FAGITO_POSITION_ABSOLUTE,
        justifyContent: style.FAGITO_FLEX_START
    },
    selectedValueText: {
        maxWidth: "100%"
    },
    locationSelectedValueText: {
        minWidth: "82%",
        maxWidth: windows.width - 25
    },
    dropdownErrorMessageSection: {
        paddingTop: 5
    },
    dropdownErrorMessage: {
        fontSize: 14,
        fontFamily: style.FAGITO_FONT_FAMILY_LATO,
        color: style.FAGITO_ERROR_TEXT_COLOR
    }
});

export { STYLES };