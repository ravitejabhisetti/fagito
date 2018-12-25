import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-dates-wrapper.style';
import { FagitoDateComponent } from '../fagito-components';

class FagitoDatesWrapperComponent extends Component {
    render() {
        return (
            <View>
                <Text>dates wrapper component</Text>
                <FagitoDateComponent></FagitoDateComponent>
            </View>
        )
    }
}

export default FagitoDatesWrapperComponent;