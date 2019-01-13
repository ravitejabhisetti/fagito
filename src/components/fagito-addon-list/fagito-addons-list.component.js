import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-addons-list.style';
import { FagitoAddon } from '../fagito-components';

class FagitoAddonsList extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        const { ...props } = this.props;
        let addonsList = null;
        addonsList = props.addonsList.map((addon, addonIndex) => {
            return (
                <FagitoAddon key={addonIndex} addonIndex={addonIndex} addon={addon}></FagitoAddon>
            )
        })
        return (
            <View>
                <View style={STYLES.sectionNameSegment}>
                    <Text style={STYLES.addonSectionName}>{props.addonSectionName}</Text>
                </View>
                {addonsList}
            </View>
        )
    }
}

export default FagitoAddonsList;