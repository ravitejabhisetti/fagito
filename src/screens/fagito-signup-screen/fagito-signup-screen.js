import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { FAGITO_SIGNUP_SCREEN, FAGITO_FORMITEMS } from '../../common/fagito-constants';
import { FagitoFormComponent } from '../../components/fagito-components';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';

class FagitoSignupScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };
    state = {
        signupItems: {}
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.state.signupItems = this.props.navigation.getParam(FAGITO_FORMITEMS);
    }
    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <FagitoFormComponent formItems={this.state.signupItems} />
            </View>
        )
    }
}

export default FagitoSignupScreen;