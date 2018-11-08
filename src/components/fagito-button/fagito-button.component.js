import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-button.style';
import * as style from '../../common/fagito-style-constants';

const FagitoButton = (props) => {
    const buttonTitle = props.buttonTitle;
    return (
        <View>
            <TouchableOpacity onPress={props.onButtonClick} activeOpacity={style.FAGITO_BUTTON_OPACITY} style={STYLES.button}>
                <Text style={STYLES.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    )

}

export default FagitoButton;