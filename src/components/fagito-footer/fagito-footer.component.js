import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-footer.style';

class FagitoFooterComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={STYLES.footerSegment}>
                <Text style={STYLES.footerText}>{this.props.footerText}</Text>
            </View>
        )
    }
}

export default FagitoFooterComponent;