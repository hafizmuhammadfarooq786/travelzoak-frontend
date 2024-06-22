import { AdminPaths } from '@/constants/UrlConstants';
import { SendAuthRequest, VerifyOtpRequest } from '@/redux/models/authModels';
import {
  logoutRequest,
  sendAuthRequest,
  verifyOtpRequest,
} from '@/redux/services/authApis';
import {
  setAuthEmail,
  setAuthError,
  setAuthStatus,
  setAuthUser,
} from '@/redux/slice/authSlice';
import { AppDispatch } from '@/redux/store';
import { LocalStorageKey } from '@/services/storage/LocalStorageApi';
import {
  getCurrentMillis,
  getDeviceId,
  localLogout,
} from '@/util/globalFunctions';
import { LOGGER, WoiCandidateModule } from '../../module';
import { isHttpSuccessCode } from '../util/HttpUtil';

const AuthStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export enum UserRoles {
  Admin = 'Admin',
  User = 'User',
  Partner = 'Partner',
}

const AuthController = (dispatch: AppDispatch, auth: any, router: any) => {
  const getAuthEmail = () => {
    return auth.email;
  };

  const clearAuthError = () => {
    dispatch(setAuthError(''));
    dispatch(setAuthStatus(AuthStatus.IDLE));
  };

  const onSendMagicLink = async (state: SendAuthRequest) => {
    const { email } = state;
    dispatch(setAuthStatus(AuthStatus.LOADING));
    const result = await sendAuthRequest({ email });

    if (isHttpSuccessCode(result.code)) {
      // store the time when the auth code was requested
      WoiCandidateModule.localStorage().setNumber(
        LocalStorageKey.lastAuthCodeRequestedAtMillis,
        getCurrentMillis(),
      );

      // reset the attempt number
      WoiCandidateModule.localStorage().setNumber(
        LocalStorageKey.authCodeAttemptNum,
        0,
      );

      dispatch(setAuthStatus(AuthStatus.SUCCESS));
      dispatch(setAuthEmail(email));
      return true;
    } else {
      LOGGER.error(`Error in onSendMagicLink, result=${result}`);
      dispatch(setAuthError(result.message[0]));
      return false;
    }
  };

  const onVerifyCode = async (state: VerifyOtpRequest) => {
    const { email, code, deviceId } = state;
    dispatch(setAuthStatus(AuthStatus.LOADING));
    const result = await verifyOtpRequest({
      email,
      code,
      deviceId,
    });

    if (isHttpSuccessCode(result.code)) {
      dispatch(setAuthStatus(AuthStatus.SUCCESS));
      dispatch(setAuthUser(result.data));
      dispatch(setAuthError(''));

      //set access and refresh token in local storage
      WoiCandidateModule.localStorage().setString(
        LocalStorageKey.accessToken,
        result.data.accessToken,
      );
      WoiCandidateModule.localStorage().setString(
        LocalStorageKey.refreshToken,
        result.data.refreshToken,
      );

      LOGGER.debug(`Success onVerifyCode, error=${result}`);

      if (result.data.role.name === UserRoles.User.toLowerCase()) {
        router.push(AdminPaths.Trips);
      } else if (result.data.role.name === UserRoles.Admin.toLowerCase()) {
        router.push(AdminPaths.Trips);
      }
    } else {
      LOGGER.error(`Error onVerifyCode, error=${result}`);
      dispatch(setAuthStatus(AuthStatus.ERROR));
      const errorMessage = result.message.toString();
      dispatch(setAuthError(errorMessage));
    }
  };

  const onLogout = async () => {
    const result = await logoutRequest({
      deviceId: getDeviceId(),
    });

    if (isHttpSuccessCode(result.code)) {
      localLogout();
    }
  };

  return {
    getAuthEmail,
    clearAuthError,
    onSendMagicLink,
    onVerifyCode,
    onLogout,
  };
};

export default AuthController;
