import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { FAGITO_SIGNUP_SCREEN, FAGITO_FORMITEMS, FAGITO_REGISTER } from '../../common/fagito-constants';
import { FagitoFormComponent } from '../../components/fagito-components';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FAGITO_SIGNUP_ITEMS } from '../../common/fagito-signup-signin';
import { connect } from 'react-redux';
import { resetUserDetails } from '../../store/actions/actions';

class FagitoSignupScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };
    state = {
        signupItems: {}
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            signupItems: this.props.formItems
        })
    }
    componentWillUnmount() {
        this.props.resetUserDetails();
    }
    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <FagitoFormComponent termsText buttonTitle={FAGITO_REGISTER} formItems={this.state.signupItems} />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        formItems: state.userDetails.formItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetUserDetails: () => dispatch(resetUserDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoSignupScreen);