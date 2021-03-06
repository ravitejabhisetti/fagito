import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-product.style';
import { FagitoButton } from '../fagito-components';
import { ADD_BUTTON_TITLE, SOLD_OUT, NULL, FAGITO_SIGNUP_SCREEN } from '../../common/fagito-constants';
import { addSelectedProduct, updatedProductsOfUser } from '../../store/actions/actions';
import { connect } from 'react-redux';
import * as style from '../../common/fagito-style-constants';
import { scrollViewRef } from '../../screens/fagito-home-screen/fagito-home-screen';
import { withNavigation } from 'react-navigation';

class FagitoProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { showDefault: true, error: false };
    }
    handleProduct = (product, timingSelected) => {
        if (this.props.userLoggedIn) {
            scrollViewRef.scrollTo({ x: 0, y: 0 });
            this.props.updatedProductsOfUser(product, timingSelected, this.props.selectedDate,
                this.props.monthOfSelectedDate, NULL, true, null);
        } else {
            this.props.navigation.navigate(FAGITO_SIGNUP_SCREEN);
        }
    }
    render() {
        let productVariants = null;
        let isProductVeg = (this.props.product.base.isVeg ? require('../../assets/veg.jpg') : require('../../assets/nonveg.jpg'));
        let image = (this.state.showDefault || !this.props.product.image) ? require('../../assets/dummyFoodImage.jpg') :
            ((this.state.error || !this.props.product.image) ? require('../../assets/dummyFoodImage.jpg') : { uri: this.props.product.image });
        let addButton = null;
        if (this.props.product.isSoldOut) {
            addButton = (
                <Text style={STYLES.soldOutText}>{SOLD_OUT}</Text>
            )
        } else {
            addButton = (
                <FagitoButton
                    borderColor={style.FAGITO_BUTTON_COLOR} backgroundColor={style.FAGITO_WHITE_COLOR}
                    onButtonClick={() => this.handleProduct(this.props.product, this.props.timing.timingSelected)}
                    buttonTitle={ADD_BUTTON_TITLE}></FagitoButton>
            )
        }
        if (this.props.product.variants) {
            productVariants = (
                <TouchableOpacity onPress={() => this.props.updateModalProduct()} style={STYLES.productVariants} activeOpacity={0.5}>
                    <Text style={STYLES.variant}>{this.props.product.variants.length} more option{this.props.product.variants.length > 1 && 's'}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={STYLES.productSegment}>
                <Image style={STYLES.image}
                    onLoadEnd={() => this.setState({ showDefault: false })}
                    onError={() => this.setState({ error: true })}
                    source={image}>
                </Image>
                <Text style={STYLES.productName}><Image style={STYLES.icon} source={isProductVeg}></Image> {this.props.product.base.name}</Text>
                <Text style={STYLES.productPrice}>Rs {this.props.product.base.price}</Text>
                <View style={STYLES.addButton}>
                    {addButton}
                </View>
                {productVariants}
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatedProductsOfUser: (product, timingSelected, dateSelected, month, variantIndex, update, index) => dispatch(updatedProductsOfUser(product, timingSelected, dateSelected, month, variantIndex, update, index))
    }
}

const mapStateToProps = (state) => {
    return {
        timing: state.deliveryTimingAndDates.timing,
        selectedDate: state.deliveryTimingAndDates.selectedDate,
        monthOfSelectedDate: state.deliveryTimingAndDates.selectedMonth,
        userLoggedIn: state.userDetails.userLoggedInStatus
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(FagitoProduct));