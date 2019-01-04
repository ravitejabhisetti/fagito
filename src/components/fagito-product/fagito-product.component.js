import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { STYLES } from './fagito-product.style';
import { FagitoButton } from '../fagito-components';
import { ADD_BUTTON_TITLE } from '../../common/fagito-constants';

class FagitoProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { showDefault: true, error: false };
    }
    render() {
        let isProductVeg = (this.props.product.base.isVeg ? require('../../assets/veg.jpg') : require('../../assets/nonveg.jpg'));
        let image = (this.state.showDefault || !this.props.product.image) ? require('../../assets/dummyFoodImage.jpg') :
            ((this.state.error || !this.props.product.image) ? require('../../assets/dummyFoodImage.jpg') : { uri: this.props.product.image });
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
                    <FagitoButton buttonTitle={ADD_BUTTON_TITLE}></FagitoButton>
                </View>
            </View>
        )
    }
}

export default FagitoProduct;