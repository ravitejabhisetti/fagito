import { Navigation } from 'react-native-navigation';
import { FAGITO_SIGNUP_SIGNIN_BROWSE_BUTTONS_SCREEN } from '../common/fagito-constants';
import { FagitoSignupSigninBrowseButtonsScreen } from './fagito-screens';

export function registerScreens() {
    Navigation.registerComponent(FAGITO_SIGNUP_SIGNIN_BROWSE_BUTTONS_SCREEN, () => FagitoSignupSigninBrowseButtonsScreen);
}
