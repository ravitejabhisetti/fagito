import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-user-details-update-screen-style';

class FagitoUpdateUserDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUserDetails: null
        }
    }
    static navigationOptions = ({ navigation, check, screenProps }) => {
        return {
            title: 'Update ' + navigation.getParam('sectionName')
        }
    }
    componentWillMount() {
        this.setState((state) => {
            return {
                ...state,
                loggedInUserDetails: this.props.navigation.getParam('loggedInUserDetails')
            }
        })
    }
    render() {
        return (
            <View>
                <Text>Fagito update screen</Text>
            </View>
        )
    }
}

export default FagitoUpdateUserDetailsScreen;