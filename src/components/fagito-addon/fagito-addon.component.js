import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-addon.style';
import Icon from 'react-native-vector-icons/AntDesign';
import * as style from '../../common/fagito-style-constants';
import { PLUS, MINUS } from '../../common/fagito-constants';
import { connect } from 'react-redux';
import { addAddon, deleteAddon } from '../../store/actions/actions';

class FagitoAddon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addonCount: 0
        }
    }
    handleAddon = (action) => {
        this.setState((state) => {
            let updatedCount = state.addonCount;
            if (action === PLUS && state.addonCount < 3 && this.props.addonsCount < 3) {
                updatedCount = state.addonCount + 1;
                this.props.addAddon(this.props.addon);
            }
            if (action === MINUS && state.addonCount && this.props.addonsCount) {
                updatedCount = state.addonCount - 1;
                this.props.deleteAddon(this.props.addon);
            }
            return {
                ...state,
                addonCount: updatedCount
            }
        })
    }
    render() {
        const { ...props } = this.props;
        let minusSection = null;
        let selectedAddons = null;
        if (this.state.addonCount) {
            minusSection = (
                <TouchableOpacity onPress={() => this.handleAddon(MINUS)} activeOpacity={1} style={STYLES.addonMinus}>
                    <Icon name="minus" size={16} color={style.FAGITO_BLACK_COLOR}></Icon>
                </TouchableOpacity>
            )
            selectedAddons = (
                <Text style={STYLES.addonsSelected}>{this.state.addonCount} selected</Text>
            )
        }
        return (
            <View>
                <View style={STYLES.addonSegment}>
                    {minusSection}
                    <View style={[STYLES.addonDetails, props.addonIndex === 0 ? STYLES.addonDetailsBottomBorder : null]}>
                        <View>
                            <Text style={STYLES.addonName}>{props.addon.name}</Text>
                            <Text style={STYLES.addonsSelected}>Rs {props.addon.price}</Text>
                            {selectedAddons}
                        </View>
                        <TouchableOpacity onPress={() => this.handleAddon(PLUS)} activeOpacity={1}>
                            <Icon name="plus" size={16} color={style.FAGITO_BLACK_COLOR}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addonsCount: state.addons.addonsCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAddon: (addon) => dispatch(addAddon(addon)),
        deleteAddon: (addon) => dispatch(deleteAddon(addon))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoAddon);