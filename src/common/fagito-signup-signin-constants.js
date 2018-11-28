export const FAGITO_SIGNUP_FORM = [
    {
        label: 'Your Name',
        value: '',
        fieldName: 'name'
    },
    {
        label: 'Email',
        value: '',
        fieldName: 'email'
    },
    {
        label: 'Mobile',
        value: '',
        fieldName: 'mobileNumber'
    },
    {
        label: 'Password',
        value: '',
        fieldName: 'password'
    }
]

export const FAGITO_SIGNIN_FORM = [
    {
        label: 'Email',
        value: '',
        fieldName: 'email'
    },
    {
        label: 'Password',
        value: '',
        fieldName: 'password'
    }
]

export const FAGITO_RESET_PASSWORD_FORM = [
    {
        label: 'Email',
        value: '',
        fieldName: 'email'
    }
]

export const FAGITO_FIREBASE_SIGNUP_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=';
export const FAGITO_FIREBASE_SIGNIN_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=';
export const FAGITO_FIREBASE_REFRESH_TOKEN_URL = 'https://securetoken.googleapis.com/v1/token?key=';
