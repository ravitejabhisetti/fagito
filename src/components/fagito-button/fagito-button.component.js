import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-button.style';
import * as style from '../../common/fagito-style-constants';

class FagitoButton extends Component {
    constructor(props) {
        super(props);
    }
    handleButton = () => {
        return;
    }
    render() {
        const buttonTitle = this.props.buttonTitle;
        return (
            <View>
                <TouchableOpacity activeOpacity={style.FAGITO_BUTTON_OPACITY} style={STYLES.button} onPress={this.handleButton}>
                    <Text style={STYLES.buttonText}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default FagitoButton;