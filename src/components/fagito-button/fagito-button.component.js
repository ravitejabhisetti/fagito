import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-button.style';
import * as style from '../../common/fagito-style-constants';

class FagitoButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const buttonTitle = this.props.buttonTitle;
        return (
            <View>
                <TouchableOpacity onPress={this.props.onButtonClick} activeOpacity={style.FAGITO_BUTTON_OPACITY} style={STYLES.button}>
                    <Text style={STYLES.buttonText}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default FagitoButton;