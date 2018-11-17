import React, { Component } from 'react';
import { TextInput, View, Animated, Text } from 'react-native';
import * as style from './fagito-input-text-style';

class FagitoTextInput extends Component {
    state = { isFocused: false, value: '' };
    constructor(props) {
        super(props);
        // this.state.value = '';
    }
    componentWillMount() {
        this.state.value = this.props.input.value;
        this._textBoxIsFocused = new Animated.Value(this.state.value === '' ? 0 : 1);
        this._textBoxLabelColor = new Animated.Value(!this.state.isFocused || this.state.value === '' ? 0 : 1);
    }
    componentDidUpdate() {
        Animated.timing(this._textBoxIsFocused, {
            toValue: (this.state.isFocused || (this.state.value && this.state.value !== '')) ? 1 : 0,
            duration: 200
        }).start();
        Animated.timing(this._textBoxLabelColor, {
            toValue: (this.state.isFocused || (this.state.isFocused && this.state.value !== '') ? 1 : 0),
            duration: 200
        }).start();
    }
    handleFocus = () => {
        this.setState({ isFocused: true })
    };
    handleBlur = () => {
        this.setState({ isFocused: false });
    }
    handleTextChange = (newText) => {
        this.setState({
            value: newText
        })
        this.props.onChangeText(newText);
    }
    componentDidMount() {
    }
    render() {
        const renderErrorText = null;
        const { label, meta: { error }, ...props } = this.props;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            fontFamily: style.FAGITO_FONT_FAMILY_LATO,
            top: this._textBoxIsFocused.interpolate(style.FAGITO_TEXT_INPUT_TOP_RANGE),
            color: this._textBoxLabelColor.interpolate(style.FAGITO_TEXT_INPUT_COLOR_RANGE),
            fontSize: this._textBoxIsFocused.interpolate(style.FAGITO_TEXT_INPUT_FONT_RANGE)
        }
        return (
            <View style={style.FAGITO_TEXT_INPUT_CONTAINER.textInputContainer}>
                <Animated.Text style={labelStyle}>
                    {label}
                </Animated.Text>
                <TextInput
                    {...props}
                    value={this.state.value}
                    onChangeText={this.handleTextChange}
                    style={[style.FAGITO_TEXT_INPUT_CONTAINER.textInput, style.FAGITO_TEXT_INPUT_CONTAINER.greyColor]}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    keyboardShouldPersistTaps="never"
                    blurOnSubmit
                />
                {/* {renderErrorText} */}
                <Text style={style.FAGITO_TEXT_INPUT_CONTAINER.errorText}>{error}</Text>
            </View>
        )
    }
}


export default FagitoTextInput;