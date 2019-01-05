import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { STYLES } from './fagito-product.style';
import { FagitoButton } from '../fagito-components';
import { ADD_BUTTON_TITLE, SOLD_OUT } from '../../common/fagito-constants';
import { addSelectedProduct } from '../../store/actions/actions';
import { connect } from 'react-redux';

class FagitoProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { showDefault: true, error: false };
    }
    handleProduct = (product) => {
        this.props.addProduct(product);
    }
    render() {
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
                <FagitoButton onButtonClick={() => this.handleProduct(this.props.product)} buttonTitle={ADD_BUTTON_TITLE}></FagitoButton>
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
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addSelectedProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(FagitoProduct);