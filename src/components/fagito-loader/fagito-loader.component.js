import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-loader.style';

const FagitoLoader = (props) => {
    return (
        <View style={STYLES.fagitoLoader}>
            <View style={STYLES.fagitoLoaderContainer}>
                <Text>Authenticating user</Text>
            </View>
        </View>
    )
}

export default FagitoLoader;