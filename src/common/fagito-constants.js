export const FAGITO = 'FAGITO';
export const FAGITO_HOME = 'Fagito';
export const FAGITO_SIGNUP_SCREEN = 'Signup';
export const FAGITO_SIGNIN_SCREEN = 'Signin';
export const FAGITO_RESET_PASSWORD_SCREEN = 'ResetPassword';
export const FAGITO_LOGO_MESSAGE = 'Schedule delicious home-made meals from home chefs around you.';
export const FAGITO_BROWSE = 'BROWSE HOME MADE DISHES';
export const FAGITO_SIGNUP = 'SIGN UP';
export const FAGITO_SIGNIN = 'SIGN IN';
export const FAGITO_RESET_PASSWORD_BUTTON = 'RESET PASSWORD';
export const FAGITO_FORMITEMS = 'formItems';
export const FAGITO_REGISTER = 'REGISTER';
export const FAGITO_RESET_PASSWORD = 'Reset Password';
export const FAGITO_VALID_USER_NAME_ERROR = 'Please enter a valid name';
export const FAGITO_VALID_USER_NAME_CHARACTERS_ERROR = 'name should contain only characters';
export const FAGITO_VALID_EMAIL_ERROR = 'Please enter a valid email';
export const FAGITO_VALID_MOBILE_NUMBER_ERROR = 'Please enter a valid 10 digit number';
export const FAGITO_VALID_PASSWORD_ERROR = 'Please enter a password';
export const FAGITO_DEFAULT_KEYBOARD = 'default';
export const FAGITO_NUMERIC_KEYBOARD = 'number-pad';
export const FAGITO_FIELD_NAME_MOBILE_NUMBER = 'mobileNumber';
export const FAGITO_FIELD_NAME_PASSWORD = 'password';
export const FAGITO_API_CALL_HEADERS = { "Content-Type": "application/json" };
export const FAGITO_FIREBASE_API_KEY = 'AIzaSyCVNpBVuCkNk3WqzKQUAIZntaJKOZb8bac';
export const FAGITO_LOGIN_AUTHENTICATING_USER = 'Authenticating user...';
export const FAGITO_HOME_SCREEN = 'Home';
export const FAGITO_DRAWER_NAVIGATOR = 'DrawerNavigator';
export const FAGITO_SIGNUP_AUTH_MODE = 'signup_auth_mode';
export const FAGITO_SIGNIN_AUTH_MODE = 'signin_auth_mode';
export const FAGITO_SIGNIN_FORM_NAME = 'signinForm';
export const FAGITO_SIGNUP_FORM_NAME = 'signupForm';
export const FAGITO_RESET_PASSWORD_FORM_NAME = 'resetPasswordForm';
export const FAGITO_TOKEN = 'fagitoToken';
export const FAGITO_EXPIRY_TIME = 'fagitoExpiryTime';
export const FAGITO_REFRESH_TOKEN = 'fagitoRefreshToken';
export const FAGITO_USER_DETAILS = 'fagitoUserDetails';
export const FAGITO_ENCODED_HEADERS = { "Content-Type": "application/x-www-form-urlencoded" };
export const FAGITO_REFRESH_TOKEN_REQUEST_BODY = 'grant_type=refresh_token&refresh_token=';
export const FAGITO_INVALID_PASSWORD_USERNAME_ERROR_MESSAGE = 'Invalid username/password.';
export const FAGITO_SOMETHING_WENT_WRONG_ERROR_MESSAGE = 'Something went wrong!!Try again.';
export const FAGITO_USERS_URL = 'https://o-c22e9.firebaseio.com/users.json?auth=';
export const AUTH_URL = '.json?auth=';
export const METHOD_POST = 'POST';
export const METHOD_GET = 'GET';
export const ANDROID_HARDWARE_BACK_PRESS = 'hardwareBackPress';
export const DRAWER_POSITION_LEFT = 'left';
export const WALLET_TITLE = 'Fagito Wallet';
export const SUPPORT_TITLE = 'Support';
export const SETTINGS_TITLE = 'Settings';
export const OFFERS_TITLE = 'Offers';
export const HISTORY_TITLE = 'Transactions';
export const MEALPASS_TITLE = 'Fagito Mealpass';
export const LUNCH_BUTTON = 'Lunch';
export const DINNER_BUTTON = 'Dinner';
export const TOMORROW = 'TOMORROW';
export const VEG_ONLY = 'Veg Only';
export const NON_VEG_ONLY = 'Non Veg Only';
export const ALL_CUISINE = 'All';
export const ADD_BUTTON_TITLE = 'ADD +';
export const SUNDAY = 'SUN';
export const DAYS = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT'
}
export const DAYS_LABEL = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}
export const AREA_LABEL = 'Choose your area';
export const DIET_FILTER_LABEL = 'Diet Filter';
export const CUISINE_FILTER_LABEL = 'Cuisine Filter';
export const FILTERS_CONTENT = {
    dietFilter: {
        filterName: 'dietFilter',
        initial: 0,
        header: 'Diet Filter', headerDescription: '', options: [
            { label: 'All (Veg + Non Veg)' },
            { label: 'Veg Only' },
            { label: 'Non Veg Only' }
        ]
    },
    cuisineFilter: {
        initial: 0, filterName: 'cuisineFilter',
        header: 'Cuisine Filter', headerDescription: '', options: [
            { label: 'All' },
            { label: 'South' },
            { label: 'North' },
            { label: 'Andhra' },
            { label: 'Tamil' },
            { label: 'Punjabi' },
            { label: 'Rajasthani' },
            { label: 'Marathi' },
            { label: 'Hyderabadi' },
            { label: 'Bengali' },
            { label: 'Salads' },
            { label: 'Continental' },
        ]
    },
    locationFilter: {
        initial: 0, filterName: 'locationFilter',
        header: 'Choose Area for lunch', headerDescription: 'where do you want your lunch to be delivered?', options: [
            { label: 'Madhapur' },
            { label: 'Hitech City' },
            { label: 'Jubilee Hills' },
            { label: 'Kondapur' },
            { label: 'Kothaguda' },
            { label: 'Gachibowli' },
            { label: 'Financial District' },
            { label: 'Nanakramguda' },
            { label: 'Raidurgam' },
            { label: 'Manikonda' },
            { label: 'KPHB' },
            { label: 'Banjara Hills' },
            { label: 'Srinagar Colony' },
            { label: 'Begumpet' },
            { label: 'Punjagutta' },
            { label: 'JNTU' },
            { label: 'Rest of Hyderabad - Coming Soon' },
        ]
    }
};
export const ORDERS_MODAL = { type: 'orders', modalHeader: "Today's orders", modalMessage: 'There are no orders for Today.' };
export const CHOOSE_LOCATION_MESSAGE = 'Please choose an area so that we can show you homemade lunch options available in your location.';
export const FOOTER_MESSAGE = 'Schedule meals to start using Tinmen';
export const LOCATION_FILTER = 'locationFilter';
export const FIREBASE_URL = 'https://o-c22e9.firebaseio.com/';
export const FETCH_MESSAGE_1 = 'Fetching available ';
export const FETCH_MESSAGE_2 = ' options in ';
export const LUNCH_OPTION = 'lunch';
export const DINNER_OPTION = 'dinner';
export const NO_PRODUCTS_MESSAGE_ONE = 'We donot have any ';
export const NO_PRODUCTS_MESSAGE_TWO = ' options available for this day. We are constantly working to add more options for you.';
export const SOLD_OUT = 'SOLD OUT';
export const INSUFFICIENT_BALANCE = '#insufficientBalance';
export const BOTTOM_MODAL_HEADER_SECTION_ONE = 'Modify your ';
export const BOTTOM_MODAL_HEADER_SECTION_TWO = ' selection for ';
export const REMOVE_SELECTION = 'Remove Selection';
export const ADDONS = 'Add addons to meal';
export const ORDERS = 'orders';
export const SIMILAR_MEAL = 'Choose a similar meal';