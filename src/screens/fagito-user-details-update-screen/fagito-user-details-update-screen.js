import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-user-details-update-screen-style';
import { PROFILE, UPDATE_PROFILE_FORM, USER_PROFILE } from '../../common/fagito-constants';
import { FagitoFormComponent } from '../../components/fagito-components';
import { validateFormEntities } from '../../utility/fagito-form-validations';
import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/actions';

class FagitoUpdateUserDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUserDetails: null,
            sectionName: '',
            userDetailsProfileForm: []
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
                userDetailsProfileForm: profileForm
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
        return (
            <View style={STYLES.updateDetailsContainer}>
                {userProfileForm}
                {userLocationsForm}
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (product, addonsList, updateType, formEntities) => dispatch(updateUser(product, addonsList, updateType, formEntities))
    }
}

export default connect(null, mapDispatchToProps)(FagitoUpdateUserDetailsScreen);