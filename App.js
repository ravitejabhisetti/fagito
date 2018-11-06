import { FAGITO_SIGNUP_SIGNIN_BROWSE_BUTTONS_SCREEN } from './src/common/fagito-constants';
import { registerScreens } from './src/screens/fagito-register-screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id: FAGITO_SIGNUP_SIGNIN_BROWSE_BUTTONS_SCREEN,
                children: [
                    {
                        component: {
                            name: FAGITO_SIGNUP_SIGNIN_BROWSE_BUTTONS_SCREEN,
                            options: {
                                topBar: {
                                    visible: false,
                                    height: 0
                                }
                            }
                        }
                    }
                ]
            }
        }
    })
})