import React, { Component } from 'react';
import { View, Text, BackHandler, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Header, Left, right } from 'native-base';
import {
    ANDROID_HARDWARE_BACK_PRESS, LUNCH_BUTTON, DINNER_BUTTON,
    AREA_LABEL, DIET_FILTER_LABEL, CUISINE_FILTER_LABEL, FILTERS_CONTENT, ORDERS_MODAL,
    CHOOSE_LOCATION_MESSAGE, FOOTER_MESSAGE, NO_PRODUCTS_MESSAGE_ONE, NO_PRODUCTS_MESSAGE_TWO
} from '../../common/fagito-constants';
import { STYLES } from './fagito-home-screen-style';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    FagitoLunchDinnerButtons, FagitoDatesWrapperComponent, FagitoChefList,
    FagitoDateComponent, FagitoDropdown, FagitoModalComponent, FagitoFooterComponent, FagitoSelectedProducts
} from '../../components/fagito-components';
import { updateDeliveryTiming, fagitoShowAlert } from '../../store/actions/actions';
import _ from 'lodash';

class FagitoHomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        showOrdersModal: false
    }

    componentDidMount() {
        // this.props.showLocationDropdown(FILTERS_CONTENT.locationFilter, this.props.filters.locationFilterIndex);
        BackHandler.addEventListener(ANDROID_HARDWARE_BACK_PRESS, this.handleBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener(ANDROID_HARDWARE_BACK_PRESS, this.handleBackPress);
    }
    handleBackPress = () => {
        BackHandler.exitApp();
    }
    handleFoodtimings = (lunchTiming) => {
        this.props.updateDeliveryTiming(lunchTiming);
        this.props.showLocationDropdown(FILTERS_CONTENT.locationFilter, this.props.filters.locationFilterIndex);
    }
    shouldComponentUpdate(nextProps) {
        return true;
    }
    handleOrdersModal = (showModal) => {
        this.setState({ showOrdersModal: showModal });
    }
    render() {
        let ordersModal = null;
        let noLocationMessage = null;
        if (this.state.showOrdersModal) {
            ordersModal = (
                <FagitoModalComponent modalContent={ORDERS_MODAL} hideModal={() => this.handleOrdersModal(false)}
                    showModal={this.state.showOrdersModal}>
                </FagitoModalComponent>
            );
        }
        if (!this.props.locationFilter || _.isEmpty(this.props.productsList)) {
            let textMessage = null;
            if (_.isEmpty(this.props.productsList) && !this.props.loader) {
                textMessage = NO_PRODUCTS_MESSAGE_ONE + this.props.deliveryTiming.timingSelected + NO_PRODUCTS_MESSAGE_TWO;
            }
            if (!this.props.locationFilter) {
                textMessage = CHOOSE_LOCATION_MESSAGE;
            }
            noLocationMessage = (
                <View style={STYLES.noLocationMessageSegment}>
                    <Text style={STYLES.noLocationMessageText}>{textMessage}</Text>
                </View>
            )
        }
        return (
            <View style={STYLES.homeView}>
                <Header style={STYLES.header}>
                    <View style={STYLES.headerView}>
                        <View>
                            <Icon style={STYLES.headerIcon} name="md-menu" size={23} onPress={() => this.props.navigation.openDrawer()} />
                        </View>
                        <View style={STYLES.buttonsSegment}>
                            <FagitoLunchDinnerButtons handleFood={() => this.handleFoodtimings(true)} lunchButtonSelected={this.props.deliveryTiming.lunchTiming} lunchButton={true} title={LUNCH_BUTTON}></FagitoLunchDinnerButtons>
                            <FagitoLunchDinnerButtons handleFood={() => this.handleFoodtimings(false)} lunchButtonSelected={this.props.deliveryTiming.dinnerTiming} lunchButton={false} title={DINNER_BUTTON}></FagitoLunchDinnerButtons>
                        </View>
                        <View>
                            <Icon onPress={() => this.handleOrdersModal(true)} name='md-notifications' color='black' size={23}></Icon>
                        </View>
                    </View>
                </Header>
                <View style={STYLES.homeViewContent}>
                    <FagitoDatesWrapperComponent></FagitoDatesWrapperComponent>
                    <ScrollView>
                        <View style={STYLES.homeSegment}>
                            <View style={STYLES.dietCuisineFiltersSegment}>
                                <View style={[STYLES.filterSegment, STYLES.dietFilterSegment]}>
                                    <FagitoDropdown
                                        selectedValue={this.props.dietFilter}
                                        radioOptionIndex={this.props.filters.dietFilterIndex}
                                        dropdownContent={FILTERS_CONTENT.dietFilter}
                                        dropdownLabel={DIET_FILTER_LABEL}
                                        dropdownBorder={false}>
                                    </FagitoDropdown>
                                </View>
                                <View style={STYLES.filterSegment}>
                                    <FagitoDropdown
                                        selectedValue={this.props.cuisineFilter}
                                        radioOptionIndex={this.props.filters.cuisineFilterIndex}
                                        dropdownContent={FILTERS_CONTENT.cuisineFilter}
                                        dropdownLabel={CUISINE_FILTER_LABEL}
                                        dropdownBorder={false}>
                                    </FagitoDropdown>
                                </View>
                            </View>
                            <View style={STYLES.deliveryLocationFilter}>
                                <FagitoDropdown
                                    selectedValue={this.props.locationFilter}
                                    radioOptionIndex={this.props.filters.locationFilterIndex}
                                    dropdownContent={FILTERS_CONTENT.locationFilter}
                                    dropdownLabel={AREA_LABEL}
                                    dropdownBorder={true}>
                                </FagitoDropdown>
                            </View>
                            <FagitoSelectedProducts
                                selectedProducts={this.props.selectedProducts}
                                selectedDate={this.props.selectedDate}
                            ></FagitoSelectedProducts>
                            {noLocationMessage}
                            <View style={STYLES.chefsList}>
                                <FagitoChefList
                                    dietFilter={this.props.dietFilter}
                                    cuisineFilter={this.props.cuisineFilter}
                                    productsList={this.props.productsList}></FagitoChefList>
                            </View>
                        </View>
                    </ScrollView>
                    {ordersModal}
                    <FagitoFooterComponent footerText={FOOTER_MESSAGE}></FagitoFooterComponent>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDeliveryTiming: (lunchTiming) => dispatch(updateDeliveryTiming(lunchTiming)),
        showLocationDropdown: (dropdownContent, optionSelected) => dispatch(fagitoShowAlert(dropdownContent, optionSelected))
    }
}

const mapStateToProps = (state) => {
    return {
        deliveryTiming: state.deliveryTimingAndDates.timing,
        dietFilter: state.deliveryTimingAndDates.filters.dietFilter,
        cuisineFilter: state.deliveryTimingAndDates.filters.cuisineFilter,
        locationFilter: state.deliveryTimingAndDates.filters.locationFilter,
        filters: state.deliveryTimingAndDates.filters,
        selectedDateIndex: state.deliveryTimingAndDates.selectedDateIndex,
        productsList: state.products.productsList,
        selectedProducts: state.products.selectedProductsList,
        productsLength: state.products.productsLength,
        selectedDate: state.deliveryTimingAndDates.selectedDate,
        loader: state.fagitoLoader.showLoader
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoHomeScreen);