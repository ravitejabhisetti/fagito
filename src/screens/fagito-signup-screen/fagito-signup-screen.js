// import React, { Component } from 'react';
// import { View, ScrollView } from 'react-native';
// import { FAGITO_SIGNUP_SCREEN, FAGITO_REGISTER } from '../../common/fagito-constants';
// import { FagitoFormComponent } from '../../components/fagito-components';
// import { CONTAINER_STYLE } from '../../common/fagito-common-style';
// import { connect } from 'react-redux';
// import { resetUserSignupDetails } from '../../store/actions/actions';

// class FagitoSignupScreen extends Component {
//     static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };
//     state = {
//         signupItems: []
//     }
//     constructor(props) {
//         super(props);
//     }
//     componentWillMount() {
//         this.setState({
//             signupItems: this.props.formItems
//         })
//     }
//     componentWillUnmount() {
//         this.props.resetUserSignupDetails();
//     }
//     render() {
//         return (
//             <View style={CONTAINER_STYLE.container}>
//                 <FagitoFormComponent termsText buttonTitle={FAGITO_REGISTER} formItems={this.state.signupItems} />
//             </View>
//         )
//     }
// }
// const mapStateToProps = state => {
//     return {
//         formItems: state.userDetails.formItems
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         resetUserSignupDetails: () => dispatch(resetUserSignupDetails())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FagitoSignupScreen);

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Text, View } from 'react-native';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FAGITO_SIGNUP_SCREEN, FAGITO_REGISTER } from '../../common/fagito-constants';
import { FagitoFormComponent } from '../../components/fagito-components';
import { FAGITO_SIGNUP_FORM } from '../../common/fagito-signup-signin';

class FagitoSignupScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };
    state = {
        signupItems: FAGITO_SIGNUP_FORM
    }
    handleButtonClick = (formItems) => {
        console.log('in button click check--', formItems);
    }
    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <FagitoFormComponent formButtonClick={this.handleButtonClick} termsText buttonTitle={FAGITO_REGISTER} formItems={this.state.signupItems} />
            </View>
        )
    }
}

FagitoSignupScreen = reduxForm({
    form: 'signupForm'
})(FagitoSignupScreen);

export default FagitoSignupScreen;