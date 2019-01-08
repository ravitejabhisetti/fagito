import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-chef-tags.style';
import Icon from 'react-native-vector-icons/Entypo';
import { CHEF_TAG_COLOR } from '../../common/fagito-style-constants';

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
                    <View key={index}>
                        <View style={STYLES.chefDotSection}><Icon style={STYLES.chefDotIcon} name="dot-single" size={24} color={CHEF_TAG_COLOR}></Icon><Text style={[STYLES.chefTag, STYLES.tagColor]}>{trimmedTag}</Text></View>
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