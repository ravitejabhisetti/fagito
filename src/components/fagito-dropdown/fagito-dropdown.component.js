import React, { Component } from 'react';
import { View, Text, Animated, Button, TouchableOpacity } from 'react-native';
import * as style from '../../common/fagito-style-constants';
import { STYLES } from './fagito-dropdown.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import { fagitoShowAlert } from '../../store/actions/actions';
import { connect } from 'react-redux';

class FagitoDropdown extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: ''
    }
    componentWillMount() {
        this.dropdownValueSelected = new Animated.Value(this.props.selectedValue ? 1 : 0);
    }

    componentDidUpdate() {
        Animated.timing(this.dropdownValueSelected, {
            toValue: this.props.selectedValue ? 1 : 0,
            duration: 200
        }).start();
    }

    handleDropdown = (dispatch) => {
        this.props.showDropdownContent(this.props.dropdownContent, this.props.radioOptionIndex);
    }

    render() {
        const { ...props } = this.props;
        let selectedValue = null;
        let dropdownErrorMessage = null;
        const labelStyle = {
            color: style.FAGITO_TEXT_INPUT_GREY_BORDER_COLOR,
            fontFamily: style.FAGITO_FONT_FAMILY_LATO,
            top: this.dropdownValueSelected.interpolate(style.DROPDOWN_LABEL_TOP_RANGE),
            fontSize: this.dropdownValueSelected.interpolate(style.DROPDOWN_LABEL_FONT_RANGE)
        }
        if (this.props.displayErrorMessage) {
            dropdownErrorMessage = (
                <View style={STYLES.dropdownErrorMessageSection}>
                    <Text style={STYLES.dropdownErrorMessage}>{this.props.errorMessage}</Text>
                </View>
            )
        }
        if (props.selectedValue) {
            selectedValue = (
                <Text style={[this.props.locationDropdown ? STYLES.locationSelectedValueText : STYLES.selectedValueText]} numberOfLines={1}>{props.selectedValue}</Text>
            )
            dropdownErrorMessage = null;
        }
        return (
            <View>
                <Ripple onPress={this.handleDropdown} rippleColor={style.FAGITO_BLACK_COLOR} rippleDuration={200} rippleOpacity={0.4}>
                    <View style={[STYLES.dropdownSegment, props.dropdownBorder ? STYLES.dropdownGreyBorder : null]}>
                        <TouchableOpacity activeOpacity={1}>
                            <View style={STYLES.dropdownLabelPadding}>
                                <Animated.Text style={labelStyle}>{props.dropdownLabel}</Animated.Text>
                            </View>
                            <View style={STYLES.dropdownIcon}>
                                <View style={STYLES.dropdownValue}>
                                    {selectedValue}
                                </View>
                                <View>
                                    <Icon name='md-arrow-dropdown' color={style.FAGITO_TEXT_INPUT_GREY_BORDER_COLOR} size={20}></Icon>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Ripple>
                {dropdownErrorMessage}
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showDropdownContent: (dropdownContent, optionSelected) => dispatch(fagitoShowAlert(dropdownContent, optionSelected))
    }
}

export default connect(null, mapDispatchToProps)(FagitoDropdown);