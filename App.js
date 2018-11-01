import { Navigation } from 'react-native-navigation';
import Auth from './Auth';

Navigation.registerComponent('AuthScreen', () => Auth);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'AuthScreen'
            }
        }
    })
})