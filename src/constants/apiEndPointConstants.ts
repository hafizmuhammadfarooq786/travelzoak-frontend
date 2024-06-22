export enum ApiEndPoints {
  // Auth
  SIGNUP = '/auth',
  VERIFY = '/verifyCode',
  RESEND_OTP = '/resendVerifyCode',
  REFRESH = '/refresh',
  LOGOUT = '/logout',

  // User
  ME = '/me',
  PATCH_PERSONAL_DETAILS = '/users/',
  USERS = '/users',
}

// Add public endpoint paths
export const pathsWithoutAuthorization = [
  ApiEndPoints.SIGNUP,
  ApiEndPoints.VERIFY,
  ApiEndPoints.RESEND_OTP,
];
