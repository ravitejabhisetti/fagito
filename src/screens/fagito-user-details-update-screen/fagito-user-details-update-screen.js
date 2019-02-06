import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-user-details-update-screen-style';
import {
    PROFILE, UPDATE_PROFILE_FORM, USER_PROFILE, ADDRESS, ADDRESS_TYPE_LABEL,
    ADDRESS_DROPDOWN_CONTENT, ADDRESS_TYPE_HOME, ADDRESS_TYPE_OFFICE, CITY_LABEL,
    CITY_DROPDOWN_CONTENT, FILTERS_CONTENT, PROFILE_AREA_LABEL, USER_LOCATIONS, WALLET_FIELD,
    UPDATE_LOCATIONS_FORM, SELECT_AREA_ERROR_MESSAGE, HOME_FIELD
} from '../../common/fagito-constants';
import { FagitoFormComponent, FagitoDropdown } from '../../components/fagito-components';
import { validateFormEntities } from '../../utility/fagito-form-validations';
import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/actions';

class FagitoUpdateUserDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUserDetails: null,
            sectionName: '',
            userDetailsProfileForm: [],
            userLocationsProfileForm: [],
            fieldName: '',
            displayDropdownErrorMessage: false
        }
    }
    static navigationOptions = ({ navigation, check, screenProps }) => {
        return {
            title: 'Update ' + navigation.getParam('sectionName')
        }
    }
    componentWillMount() {
        let profileForm = UPDATE_PROFILE_FORM;
        let locationsForm = UPDATE_LOCATIONS_FORM;
        let sectionName = this.props.navigation.getParam('sectionName');
        let loggedInUserDetails = this.props.navigation.getParam('loggedInUserDetails');
        let fieldName = this.props.navigation.getParam('fieldName');
        if (sectionName === PROFILE) {
            profileForm[0].value = loggedInUserDetails.name;
            profileForm[1].value = loggedInUserDetails.email;
            profileForm[2].value = loggedInUserDetails.mobileNumber;
        }
        if (sectionName === ADDRESS) {
            if (fieldName === HOME_FIELD) {
                locationsForm[0].value = loggedInUserDetails.homeAddressLineOne;
                locationsForm[1].value = loggedInUserDetails.homeAddressLineTwo;
            } else {
                locationsForm[0].value = loggedInUserDetails.officeAddressLineOne;
                locationsForm[1].value = loggedInUserDetails.officeAddressLineTwo;
            }
        }
        this.setState((state) => {
            return {
                ...state,
                sectionName: sectionName,
                loggedInUserDetails: loggedInUserDetails,
                userDetailsProfileForm: profileForm,
                userLocationsProfileForm: locationsForm,
                fieldName: fieldName
            }
        });
    }
    handleButtonClick = (formEntities) => {
        if (this.state.sectionName === PROFILE) {
            let isFormValid = validateFormEntities(formEntities, PROFILE);
            if (isFormValid) {
                this.props.updateUser(null, [], PROFILE, formEntities);
            }
        } else {
            let isFormValid = validateFormEntities(formEntities, ADDRESS);
            if (!this.props.area || this.props.area === '') {
                this.setState((state) => {
                    return {
                        ...state,
                        displayDropdownErrorMessage: true
                    }
                })
            }
            if (!this.state.displayDropdownErrorMessage && isFormValid) {
                let addAddress = this.props.navigation.getParam('addAddress');
                let showPaymentScreen = this.props.navigation.getParam('showPayment');
                let walletAmount = this.props.loggedInUserDetails[WALLET_FIELD] ? this.props.loggedInUserDetails[WALLET_FIELD] : 0;
                let fetchProductsInfo = {
                    deliveryTiming: this.props.deliveryTiming, walletAmount: walletAmount,
                    filters: this.props.filters, dateIndex: this.props.selectedDateIndex,
                    locationFilterContent: this.props.locationFilterContent, showPaymentScreen: showPaymentScreen
                };
                this.props.updateUser(null, [], ADDRESS, formEntities, this.props.addressType,
                    this.props.city, this.props.area, addAddress, fetchProductsInfo);
            }
        }
    }
    render() {
        let userProfileForm = null;
        let userLocationsForm = null;
        if (this.state.sectionName === PROFILE) {
            userProfileForm = (
                <FagitoFormComponent updateForm form={USER_PROFILE} formButtonClick={(values) => this.handleButtonClick(values)} buttonTitle='UPDATE' formItems={this.state.userDetailsProfileForm}></FagitoFormComponent>
            )
        }
        if (this.state.sectionName === ADDRESS) {
            let areaContent = FILTERS_CONTENT.locationFilter;
            areaContent['hideHeaderDescription'] = true;
            areaContent['userProfile'] = true;
            userLocationsForm = (
                <View style={STYLES.addressSection}>
                    <View style={[STYLES.locationEntity, STYLES.locationDropdownSection]}>
                        <FagitoDropdown
                            selectedValue={this.props.addressType}
                            radioOptionIndex={this.props.addressTypeIndex}
                            dropdownContent={ADDRESS_DROPDOWN_CONTENT.addressType}
                            dropdownLabel={ADDRESS_TYPE_LABEL}
                            dropdownBorder={true}>
                        </FagitoDropdown>
                    </View>
                    <View style={[STYLES.locationEntity, STYLES.locationDropdownSection]}>
                        <FagitoDropdown
                            selectedValue={this.props.city}
                            radioOptionIndex={this.props.cityIndex}
                            dropdownContent={CITY_DROPDOWN_CONTENT.city}
                            dropdownLabel={CITY_LABEL}
                            dropdownBorder={true}>
                        </FagitoDropdown>
                    </View>
                    <View style={[STYLES.locationEntity, STYLES.locationDropdownSection]}>
                        <FagitoDropdown
                            displayErrorMessage={this.state.displayDropdownErrorMessage}
                            errorMessage={SELECT_AREA_ERROR_MESSAGE}
                            selectedValue={this.props.area}
                            radioOptionIndex={this.props.areaIndex}
                            dropdownContent={areaContent}
                            dropdownLabel={PROFILE_AREA_LABEL}
                            dropdownBorder={true}>
                        </FagitoDropdown>
                    </View>
                    <View style={STYLES.locationEntity}>
                        <FagitoFormComponent updateForm form={USER_LOCATIONS} formButtonClick={(values) => this.handleButtonClick(values)} buttonTitle='UPDATE' formItems={this.state.userLocationsProfileForm}></FagitoFormComponent>
                    </View>
                    <Text style={STYLES.mandatoryFieldsMessage}>* marked fields are mandatory</Text>
                </View>
            )
        }
        return (
            <View style={STYLES.updateDetailsContainer}>
                {userProfileForm}
                {userLocationsForm}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addressType: state.updateUserProfileAndLocations.addressType,
        addressTypeIndex: state.updateUserProfileAndLocations.addressTypeIndex,
        city: state.updateUserProfileAndLocations.city,
        cityIndex: state.updateUserProfileAndLocations.cityIndex,
        area: state.updateUserProfileAndLocations.area,
        areaIndex: state.updateUserProfileAndLocations.areaIndex,
        deliveryTiming: state.deliveryTimingAndDates.timing,
        filters: state.deliveryTimingAndDates.filters,
        selectedDateIndex: state.deliveryTimingAndDates.selectedDateIndex,
        locationFilterContent: state.deliveryTimingAndDates.filters.locationFilterContent,
        loggedInUserDetails: state.userDetails.loggedInUserDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (product, addonsList, updateType, formEntities,
            addressType, city, area, addAddress, fetchProductsInfo) => dispatch(updateUser(product, addonsList, updateType,
                formEntities, addressType, city, area, addAddress, fetchProductsInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoUpdateUserDetailsScreen);