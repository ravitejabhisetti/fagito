export const FAGITO = 'FAGITO';
export const FAGITO_HOME = 'Fagito';
export const FAGITO_SIGNUP_SCREEN = 'Sign up';
export const FAGITO_SIGNIN_SCREEN = 'Sign in';
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
export const FAGITO_TRANSACTIONS_URL = 'https://o-c22e9.firebaseio.com/transactions.json?auth=';
export const AUTH_URL = '.json?auth=';
export const METHOD_POST = 'POST';
export const METHOD_GET = 'GET';
export const METHOD_PUT = 'PUT';
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
export const ADDRESS_TYPE_LABEL = 'Address Type';
export const CITY_LABEL = 'City';
export const ADDRESS_TYPE_OFFICE = 'Office';
export const ADDRESS_TYPE_HOME = 'Home';
export const HOME_FIELD = 'home';
export const OFFICE_FIELD = 'office';
export const CITY_FIELD = 'city';
export const ADDRESS_TYPE = 'addressType';
export const ADDRESS_DROPDOWN_CONTENT = {
    addressType: {
        userProfile: true,
        filterName: 'addressType',
        intial: 0,
        header: 'Choose Address Type', headerDescription: '', options: [
            { label: 'Office' },
            { label: 'Home' }
        ]
    }
}
export const CITY_DROPDOWN_CONTENT = {
    city: {
        userProfile: true,
        filterName: 'city',
        intial: 0,
        header: 'City', headerDescription: '', options: [
            { label: 'Hyderabad' }
        ]
    }
}
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
        initial: 0, filterName: 'locationFilter', areas: true,
        header: 'Choose Area for lunch', headerDescription: 'where do you want your lunch to be delivered?', options: [
            { label: 'Madhapur', addressArea: 'Madhapur' },
            { label: 'Hitech City', addressArea: 'Hitech City' },
            { label: 'Jubilee Hills', addressArea: 'Jubilee Hills' },
            { label: 'Kondapur', addressArea: 'Kondapur' },
            { label: 'Kothaguda', addressArea: 'Kothaguda' },
            { label: 'Gachibowli', addressArea: 'Gachibowli' },
            { label: 'Financial District', addressArea: 'Financial District' },
            { label: 'Nanakramguda', addressArea: 'Nanakramguda' },
            { label: 'Raidurgam', addressArea: 'Raidurgam' },
            { label: 'Manikonda', addressArea: 'Manikonda' },
            { label: 'KPHB', addressArea: 'KPHB' },
            { label: 'Banjara Hills', addressArea: 'Banjara Hills' },
            { label: 'Srinagar Colony', addressArea: 'Srinagar Colony' },
            { label: 'Begumpet', addressArea: 'Begumpet' },
            { label: 'Punjagutta', addressArea: 'Punjagutta' },
            { label: 'JNTU', addressArea: 'JNTU' }
        ]
    }
};
export const PROFILE_AREA_LABEL = '* Area';
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
export const MAKE_PAYMENT = 'MAKE PAYMENT';
export const PAYMENT_LABEL_1 = 'Payment required for your next meal: Rs ';
export const PAYMENT_LABEL_2 = ' + Rs 5 GST)';
export const ADD_MEAL = 'ADD MEAL';
export const VARIANTS = 'VARIANTS';
export const ADDONS_MODAL = 'ADDONS';
export const SAVE_ADDONS = 'SAVE ADDONS';
export const ADDON_MESSAGE_1 = 'You can add upto';
export const ADDON_MESSAGE_2 = 'more addons to your lunch';
export const NULL = 'null';
export const ADDONS_LIST = {
    Extras: [{ name: '1 Phulka', price: 6 }, { name: '2 Phulka', price: 12 }],
    Dairy: [{ name: 'Curd', price: 9 }, { name: 'Buttermilk', price: 11 }],
    'Mixed Fruit Bowls': [{ name: 'Regular Cut Fruits Mixed', price: 35 }, { name: 'Small Cut Fruits Mixed', price: 25 }]
}
export const PLUS = 'plus';
export const MINUS = 'minus';
export const ADDON_NOTE = 'Max 3 addons! You cannot add more than 3 addons to your meal.';
export const MODIFY_ADDONS = 'Modify addons to meal';
export const REMOVE_ADDONS = 'Remove addons from meal';
export const PERSON_OUTLINE_ICON = 'person-outline';
export const ARROW_FORWARD_ICON = 'ios-arrow-forward';
export const AT_ICON = 'ios-at';
export const PHONE_ICON = 'phone';
export const HOME_ICON = 'home';
export const OFFICE_ICON = 'computer';
export const EMAIL_ENTITY = 'Email';
export const MOBILE_NUMBER_ENTITY = 'Mobile Number';
export const OFFICE_ADDRESS_ENTITY = 'Office Address';
export const UPDATE_USER_DETAILS_SCREEN = 'UpdateUserDetails';
export const ADDRESS = 'Address';
export const PROFILE = 'Profile';
export const USER_PROFILE = 'userProfileForm';
export const USER_LOCATIONS = 'userLocationsForm';
export const UPDATE_PROFILE_FORM = [
    {
        label: 'Your Name',
        value: '',
        fieldName: 'name'
    },
    {
        label: 'Email',
        value: '',
        fieldName: 'email',
        nonEditable: true
    },
    {
        label: 'Mobile',
        value: '',
        fieldName: 'mobileNumber'
    }
]
export const UPDATE_LOCATIONS_FORM = [
    {
        label: '* Address Line 1',
        value: '',
        fieldName: 'homeAddressLineOne'
    },
    {
        label: '* Address Line 2',
        value: '',
        fieldName: 'homeAddressLineTwo'
    }
]
export const STRING = 'string';
export const UPDATE_PROFILE_INFO = 'Updating your profile information...';
export const SETTINGS_SCREEN = 'Settings';
export const SELECT_AREA_ERROR_MESSAGE = 'Please select an area';
export const ENTER_ADDRESS_ERROR = 'Please enter your address';
export const ADDRESS_LINE_ONE = 'AddressLineOne';
export const ADDRESS_LINE_TWO = 'AddressLineTwo';
export const ADDRESS_AREA = 'AddressArea';
export const ADDRESS_CITY = 'AddressCity';
export const FAGITO_USER_TRANSACTIONS = 'fagitoUserTransactions';
export const ADD_OFFICE_ADDRESS = 'OFFICE: Add Address';
export const ADD_HOME_ADDRESS = 'HOME: Add Address';
export const WALLET_ENTITY = 'Wallet Balance';
export const EMAIL_ICON = 'email';
export const WALLET_ICON = 'wallet';
export const TRANSACTION_ICON = 'book';
export const NET_BANKING_ENTITY = 'Pay via Card / Net Banking';
export const SODEXO_ENTITY = 'Pay via Sodexo';
export const PAYTM_ENTITY = 'Pay via Paytm';
export const TRANSACTION_ENTITY = 'View Wallet Transaction History';
export const HISTORY_SCREEN = 'History';
export const WALLET_SCREEN = 'Wallet';
export const WALLET_PAYMENT_SCREEN = 'WalletPaymentScreen';
export const NET_BANKING_TITLE = 'Card / Netbanking';
export const SODEXO_TITLE = 'Sodexo';
export const PAYTM_TITLE = 'PayTM';
export const AMOUNTS_LIST = [
    { amount: '10' },
    { amount: '20' },
    { amount: '30' },
    { amount: '40' },
    { amount: '50' },
    { amount: '60' }
]
export const AMOUNT_FORM = [
    {
        label: 'Enter Amount',
        value: '',
        fieldName: 'amount'
    }
]
export const SODEXO_FORM_ENTITIES = [
    {
        label: 'Enter Amount ( minimum 1000 )',
        value: '',
        fieldName: 'amount'
    }
]
export const NET_BANKING_FORM = 'netBankingForm';
export const SODEXO_FORM = 'sodexoForm';
export const AMOUNT_FIELD = 'amount';
export const UPDATE_WALLET = 'Updating wallet...';
export const WALLET_FIELD = 'walletAmount';
export const WALLET_ALERT_HEADER = 'Wallet Recharge Successful';
export const WALLET_ALERT_MESSAGE = ' have been added to your Fagito wallet. Your wallet balance is now ';
export const SODEXO_MINIMUM_AMOUNT_ALERT = {
    alertHeader: 'Minimum 1000',
    alertMessage: 'The minimum amount for Sodexo pickup is Rs 1000'
}
export const CURRENT_WALLET_BALANCE_TEXT = 'Current Wallet balance: Rs ';
export const DRAWER_WALLET_BALNCE_TEXT = 'Wallet Balance: Rs ';
export const FEEDBACK_MODAL = 'Feedback';
export const FEEDBACK_MODAL_TEXT = 'You do not have any recent orders to give feedback about.';
export const OFFERS_FORM_ENTITIES = [
    {
        label: 'Enter Code',
        value: '',
        fieldName: 'code'
    }
]
export const OFFERS_FORM = 'offersForm';
export const APPLY_COUPON = 'APPLY COUPON';
export const OFFER_ALERT = {
    error: {
        message: 'Invalid voucher'
    }
}
export const SUPPORT_MOBILE_ENTITY = 'Mobile';
export const SUPPORT_MOBILE_FIELD = 'supportMobile';
export const SUPPORT_EMAIL_FIELD = 'supportEmail';
export const FETCH_PRODUCTS_URL = 'https://awesome-places-1538464312664.firebaseio.com/products.json';
export const FETCH_PRODUCTS = 'fetchProducts';
export const ADD_ADDRESS_ARRAY = [
    { label: ADD_OFFICE_ADDRESS }, { label: ADD_HOME_ADDRESS }]
export const DOT_ICON = 'dot-single';
export const FREE_MEAL_TITLE = 'Refer and Earn';
export const FREE_MEAL_MESSAGE_1 = 'Refer FAGITO to your friend and get ';
export const FREE_MEAL_MESSAGE_2 = 'credited in your fagito wallet on his/her first meal order.';
export const FREE_MEAL_AMOUNT = '50 rupees ';
export const REFERRAL_CODE_MESSAGE = 'Your referral code is';
export const REFERRAL_CODE = 'RAVZBWB';
export const NO_MEALPASS_MESSAGE = 'There are no currently available Mealpass for your account';
export const NEXT_MEAL_COST_TYPE = 'nextMealCost';
export const PAYMENT_NEEDED_TYPE = 'paymentNeeded';

