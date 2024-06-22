import { ApiEndPoints } from '@/constants/apiEndPointConstants';
import {
  LogoutRequest,
  LogoutResponse,
  ResendOtpRequest,
  ResendOtpResponse,
  SendAuthRequest,
  SendAuthResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from '@/redux/models/authModels';
import { getDeviceId } from '@/util/globalFunctions';
import { LOGGER } from '../../../module';
import { getApiHandler } from './ApiFactory';

export const sendAuthRequest = async (
  body: SendAuthRequest,
): Promise<SendAuthResponse> => {
  const response: SendAuthResponse = await getApiHandler().post(
    ApiEndPoints.SIGNUP,
    body,
  );
  // Extract the data property from AxiosResponse
  const responseData: SendAuthResponse = response;
  LOGGER.debug(
    `sendAuthRequest() body=${JSON.stringify(body)}, response=${JSON.stringify(
      responseData,
    )}`,
  );
  return responseData;
};

export const verifyOtpRequest = async (
  body: VerifyOtpRequest,
): Promise<VerifyOtpResponse> => {
  const response: VerifyOtpResponse = await getApiHandler().post(
    ApiEndPoints.VERIFY,
    body,
  );
  // Extract the data property from AxiosResponse
  const responseData: VerifyOtpResponse = response;
  LOGGER.debug(
    `verifyOtpRequest() body=${JSON.stringify(body)}, response=${JSON.stringify(
      responseData,
    )}`,
  );
  return responseData;
};

export const resendOtpRequest = async (
  body: ResendOtpRequest,
): Promise<ResendOtpResponse> => {
  const response: ResendOtpResponse = await getApiHandler().post(
    ApiEndPoints.RESEND_OTP,
    body,
  );
  // Extract the data property from AxiosResponse
  LOGGER.debug(
    `resendOtpRequest() body=${JSON.stringify(body)}, response=${JSON.stringify(
      response,
    )}`,
  );
  return response;
};

export const logoutRequest = async (
  body: LogoutRequest,
): Promise<LogoutResponse> => {
  const response: LogoutResponse = await getApiHandler().post(
    ApiEndPoints.LOGOUT,
    body,
  );
  // Extract the data property from AxiosResponse
  const responseData: LogoutResponse = response;
  LOGGER.debug(
    `logoutRequest() body=${JSON.stringify(body)}, response=${JSON.stringify(
      responseData,
    )}`,
  );
  return responseData;
};

export const getMeRequest = async (): Promise<SendAuthResponse> => {
  const response: SendAuthResponse = await getApiHandler().get(
    ApiEndPoints.ME + `/${getDeviceId()}`,
  );
  // Extract the data property from AxiosResponse
  const responseData: SendAuthResponse = response;
  LOGGER.debug(`getMeRequest() response=${JSON.stringify(responseData)}`);
  return responseData;
};
