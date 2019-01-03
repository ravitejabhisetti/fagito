import { StyleSheet } from 'react-native';
import * as style from '../../common/fagito-style-constants';

const STYLES = StyleSheet.create({
    productSegment: {
        backgroundColor: 'red',
        flexBasis: '33%'
    },
    image: {
        width: '100%',
        minHeight: 100,
        resizeMode: 'cover'
    }
});

export { STYLES };