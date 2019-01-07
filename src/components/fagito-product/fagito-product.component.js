import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-product.style';
import { FagitoButton } from '../fagito-components';
import { ADD_BUTTON_TITLE, SOLD_OUT } from '../../common/fagito-constants';
import { addSelectedProduct, updatedProductsOfUser } from '../../store/actions/actions';
import { connect } from 'react-redux';

class FagitoProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { showDefault: true, error: false };
    }
    handleProduct = (product, timingSelected) => {
        this.props.updatedProductsOfUser(product, timingSelected, this.props.selectedDate, true, null);
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
        addProduct: (product, timingSelected, dateSelected) => dispatch(addSelectedProduct(product, timingSelected, dateSelected)),
        updatedProductsOfUser: (product, timingSelected, dateSelected, update, index) => dispatch(updatedProductsOfUser(product, timingSelected, dateSelected, update, index))
    }
}

const mapStateToProps = (state) => {
    return {
        timing: state.deliveryTimingAndDates.timing,
        selectedDate: state.deliveryTimingAndDates.selectedDate
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoProduct);