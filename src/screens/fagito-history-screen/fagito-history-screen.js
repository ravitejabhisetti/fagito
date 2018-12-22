import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BackIcon } from '../../components/fagito-components';
import { HISTORY_TITLE, FAGITO_HOME_SCREEN } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';

class FagitoHistoryScreen extends Component {
    render() {
        return (
            <View>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={HISTORY_TITLE} />
            </View>
        )
    }
}

export default FagitoHistoryScreen;