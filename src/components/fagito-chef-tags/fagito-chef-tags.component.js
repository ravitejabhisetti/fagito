import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-chef-tags.style';

class ChefTags extends Component {
    render() {
        let chefTags = null;
        const { ...props } = this.props;
        let chefTagsArray = props.tags.split(',');
        chefTags = chefTagsArray.map((tag, index) => {
            let trimmedTag = tag.trim();
            if (index === 0) {
                return (
                    <View key={index}><Text style={STYLES.tagColor}>{trimmedTag}</Text></View>
                )
            } else {
                return (
                    <View key={index} style={STYLES.chefDotSection}>
                        <View><Text style={STYLES.chefDot}>.</Text></View>
                        <View><Text style={[STYLES.chefTag, STYLES.tagColor]}>{trimmedTag}</Text></View>
                    </View>
                )
            }
        })
        return (
            <View style={STYLES.chefTagsContainer}>
                {chefTags}
            </View>
        )
    }
}

export default ChefTags;