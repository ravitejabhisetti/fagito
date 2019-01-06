import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    selectedProductsSegment: {
        flex: 1,
        flexWrap: style.FAGITO_WRAP,
        flexDirection: style.FAGITO_ROW,
        marginTop: 12,
        justifyContent: style.FAGITO_SPACE_BETWEEN
    }
});

export { STYLES };