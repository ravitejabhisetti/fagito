import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-button.style';
import * as style from '../../common/fagito-style-constants';

const FagitoButton = (props) => {
    const buttonTitle = props.buttonTitle;
    return (
        <View>
            <TouchableOpacity onPress={props.onButtonClick} activeOpacity={style.FAGITO_BUTTON_OPACITY}>
                <View style={[STYLES.button,
                { borderColor: props.borderColor, backgroundColor: props.backgroundColor }, { opacity: !props.buttonInActive ? 1 : style.FAGITO_BUTTON_OPACITY }]}>
                    <Text style={[{ color: props.borderColor }, STYLES.buttonText]}>{buttonTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}

export default FagitoButton;