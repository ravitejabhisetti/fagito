import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { FAGITO_SIGNIN_SCREEN, FAGITO_SIGNIN } from '../../common/fagito-constants';
import { FagitoFormComponent } from '../../components/fagito-components';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { connect } from 'react-redux';
import { resetSigninDetails } from '../../store/actions/actions';

class FagitoSigninScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNIN_SCREEN };
    state = {
        signinItems: {}
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            signinItems: this.props.formItems
        })
    }
    componentWillUnmount() {
        this.props.resetSigninDetails();
    }
    handleResetPassword = () => {
        this.props.navigation.navigate('ResetPassword');
    }
    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <FagitoFormComponent handleReset={this.handleResetPassword} resetPassword buttonTitle={FAGITO_SIGNIN} formItems={this.state.signinItems} />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        formItems: state.userDetails.signinItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetSigninDetails: () => dispatch(resetSigninDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoSigninScreen);