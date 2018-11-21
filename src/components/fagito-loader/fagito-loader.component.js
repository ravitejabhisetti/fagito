import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { STYLES } from './fagito-loader.style';

const FagitoLoader = (props) => {
    return (
        <View style={STYLES.fagitoLoader}>
            <View style={STYLES.fagitoLoaderContainer}>
            <ActivityIndicator color='#C14543' size='small' />
                <Text style={STYLES.loaderText}>{props.loaderText}</Text>
            </View>
        </View>
    )
}

export default FagitoLoader;