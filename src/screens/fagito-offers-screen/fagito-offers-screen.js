import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BackIcon } from '../../components/fagito-components';
import { OFFERS_TITLE, FAGITO_HOME_SCREEN } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';

class FagitoOffersScreen extends Component {
    render() {
        return (
            <View>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={OFFERS_TITLE} />
            </View>
        )
    }
}

export default FagitoOffersScreen;