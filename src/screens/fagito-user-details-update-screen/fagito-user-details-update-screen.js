import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-user-details-update-screen-style';
import { PROFILE, UPDATE_PROFILE_FORM, USER_PROFILE, ADDRESS, ADDRESS_TYPE_LABEL, ADDRESS_DROPDOWN_CONTENT, ADDRESS_TYPE_HOME, ADDRESS_TYPE_OFFICE } from '../../common/fagito-constants';
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
            fieldName: ''
        }
    }
    static navigationOptions = ({ navigation, check, screenProps }) => {
        return {
            title: 'Update ' + navigation.getParam('sectionName')
        }
    }
    componentWillMount() {
        let profileForm = UPDATE_PROFILE_FORM;
        let sectionName = this.props.navigation.getParam('sectionName');
        let loggedInUserDetails = this.props.navigation.getParam('loggedInUserDetails');
        let fieldName = this.props.navigation.getParam('fieldName');
        if (sectionName === PROFILE) {
            profileForm[0].value = loggedInUserDetails.name;
            profileForm[1].value = loggedInUserDetails.email;
            profileForm[2].value = loggedInUserDetails.mobileNumber;
        }
        this.setState((state) => {
            return {
                ...state,
                sectionName: sectionName,
                loggedInUserDetails: loggedInUserDetails,
                userDetailsProfileForm: profileForm,
                fieldName: fieldName
            }
        });
    }
    handleButtonClick = (formEntities) => {
        let isFormValid = validateFormEntities(formEntities, this.state.sectionName);
        if (isFormValid) {
            this.props.updateUser(null, [], PROFILE, formEntities);
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
            userLocationsForm = (
                <View style={STYLES.addressSection}>
                    <FagitoDropdown
                        selectedValue={this.props.addressType}
                        radioOptionIndex={this.props.addressTypeIndex}
                        dropdownContent={ADDRESS_DROPDOWN_CONTENT.addressType}
                        dropdownLabel={ADDRESS_TYPE_LABEL}
                        dropdownBorder={true}>
                    </FagitoDropdown>
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
        addressTypeIndex: state.updateUserProfileAndLocations.addressTypeIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (product, addonsList, updateType, formEntities) => dispatch(updateUser(product, addonsList, updateType, formEntities))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoUpdateUserDetailsScreen);