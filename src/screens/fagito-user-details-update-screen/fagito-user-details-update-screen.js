import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-user-details-update-screen-style';
import { PROFILE, UPDATE_PROFILE_FORM, USER_PROFILE } from '../../common/fagito-constants';
import { FagitoFormComponent } from '../../components/fagito-components';

class FagitoUpdateUserDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUserDetails: null,
            sectionName: ''
        }
    }
    static navigationOptions = ({ navigation, check, screenProps }) => {
        return {
            title: 'Update ' + navigation.getParam('sectionName')
        }
    }
    componentWillMount() {
        let sectionName = this.props.navigation.getParam('sectionName');
        let loggedInUserDetails = this.props.navigation.getParam('loggedInUserDetails');
        this.setState((state) => {
            return {
                ...state,
                sectionName: sectionName,
                loggedInUserDetails: loggedInUserDetails
            }
        });
    }
    handleButtonClick = (formItems) => {
        console.log('form items are---', formItems);
    }
    render() {
        let userProfileForm = null;
        let userLocationsForm = null;
        if (this.state.sectionName === PROFILE) {
            let profileForm = UPDATE_PROFILE_FORM;
            profileForm[0].value = this.state.loggedInUserDetails.name;
            profileForm[1].value = this.state.loggedInUserDetails.email;
            profileForm[2].value = this.state.loggedInUserDetails.mobileNumber;
            console.log('profile form to check is---', profileForm);
            userProfileForm = (
                <FagitoFormComponent form={USER_PROFILE} formButtonClick={this.handleButtonClick} buttonTitle='UPDATE' formItems={profileForm}></FagitoFormComponent>
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

export default FagitoUpdateUserDetailsScreen;