import React, { Component } from 'react';
import { View, Text, Animated, Button, TouchableOpacity } from 'react-native';
import * as style from '../../common/fagito-style-constants';
import { STYLES } from './fagito-dropdown.style';
import Icon from 'react-native-vector-icons/Ionicons';

class FagitoDropdown extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: ''
    }
    componentWillMount() {
        this.dropdownValueSelected = new Animated.Value(this.state.value !== this.props.dropdownLabel ? 1 : 0);
    }

    componentDidUpdate() {
        Animated.timing(this.dropdownValueSelected, {
            toValue: this.state.value !== this.props.dropdownLabel ? 1 : 0,
            duration: 200
        }).start();
    }

    handleLabel = () => {
        this.setState({
            value: 'check'
        })
        console.log('state is---', this.state);
    }

    render() {
        const { ...props } = this.props;
        const labelStyle = {
            color: style.FAGITO_TEXT_INPUT_GREY_BORDER_COLOR,
            fontFamily: style.FAGITO_FONT_FAMILY_LATO,
            top: this.dropdownValueSelected.interpolate(style.DROPDOWN_LABEL_TOP_RANGE),
            fontSize: this.dropdownValueSelected.interpolate(style.DROPDOWN_LABEL_FONT_RANGE)
        }
        return (
            <View style={[STYLES.dropdownSegment, props.dropdownBorder ? STYLES.dropdownGreyBorder : null]}>
                <TouchableOpacity activeOpacity={1}>
                    <View style={STYLES.dropdownLabelPadding}>
                        <Animated.Text style={labelStyle}>{props.dropdownLabel}</Animated.Text>
                    </View>
                    <View style={STYLES.dropdownIcon}>
                        <View style={STYLES.dropdownValue}>
                            <Text>Madhapur</Text>
                        </View>
                        <View>
                            <Icon name='md-arrow-dropdown' color={style.FAGITO_TEXT_INPUT_GREY_BORDER_COLOR} size={20}></Icon>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default FagitoDropdown;