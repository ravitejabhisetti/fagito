import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BackIcon, SettingsEntity } from '../../components/fagito-components';
import { SETTINGS_TITLE, FAGITO_HOME_SCREEN } from '../../common/fagito-constants';
import { STYLES } from './fagito-settings-screen-style';
import * as style from '../../common/fagito-style-constants';

class FagitoSettingsScreen extends Component {
    render() {
        return (
            <View style={STYLES.settingsSection}>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={SETTINGS_TITLE} />
                <View>
                    <SettingsEntity></SettingsEntity>
                </View>
            </View>
        )
    }
}

export default FagitoSettingsScreen;