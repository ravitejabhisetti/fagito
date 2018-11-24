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
        if (this.props.value) {
            this.props.input.value = this.props.value;
        }
        this.setState({
            value: this.props.input.value
        })
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
    handleFocus = (event) => {
        this.props.meta.touched = true;
        this.props.input.onFocus(event);
        this.setState({ isFocused: true })
    };
    handleBlur = (event) => {
        this.props.input.onBlur(event);
        this.setState({ isFocused: false });
    }
    handleTextChange = (newText) => {
        this.setState({
            value: newText
        })
        this.props.input.onChange(newText);
    }
    componentDidMount() {
    }
    render() {
        const renderErrorText = null;
        const { input, label, meta: { touched, error }, secureTextEntry, keyboardType, ...props } = this.props;
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
                    // {...props}
                    // value={this.state.value}
                    {...input}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    value={this.state.value}
                    onChangeText={(value) => this.handleTextChange(value)}
                    style={[style.FAGITO_TEXT_INPUT_CONTAINER.textInput,
                    style.FAGITO_TEXT_INPUT_CONTAINER.greyColor,
                    (touched && error) ? style.FAGITO_TEXT_INPUT_CONTAINER.borderOnError : style.FAGITO_TEXT_INPUT_CONTAINER.greyColor
                    ]}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    keyboardShouldPersistTaps="never"
                    blurOnSubmit
                />
                {touched && (error && (<Text style={style.FAGITO_TEXT_INPUT_CONTAINER.errorText}>{error}</Text>))}
            </View>
        )
    }
}


export default FagitoTextInput;