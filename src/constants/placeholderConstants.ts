export const MAX_AUTH_CODE_LENGTH = 6;

export const PlaceHolder = {
    Email: 'name@gmail.com',
    Empty: '',
    Otp: '0'.repeat(MAX_AUTH_CODE_LENGTH),
};

type PlaceHolder = typeof PlaceHolder[keyof typeof PlaceHolder];


