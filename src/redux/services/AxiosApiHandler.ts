import { EnvId } from '@/constants/EnvironmentConstants';
import {
  ApiEndPoints,
  pathsWithoutAuthorization,
} from '@/constants/apiEndPointConstants';
import { isHttpSuccessCode } from '@/util/HttpUtil';
import { getDeviceId, localLogout } from '@/util/globalFunctions';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LOGGER, WoiCandidateModule } from '../../../module';
import { LocalStorageKey } from '../../services/storage/LocalStorageApi';
import { ApiHandler } from './ApiHandler';

export class AxiosApiHandler implements ApiHandler {
  baseUrl: string;
  axiosInstance: AxiosInstance;
  lastIsTokenExpired: boolean = false;

  constructor(envId: EnvId) {
    this.baseUrl = process.env.BACKEND_URL || 'http://localhost:8000/api/v1';
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers needed
      },
      // Add any other Axios configuration options needed
    });

    //function to add authorization header
    this.axiosInstance.interceptors.request.use(async (axiosConfig: any) => {
      const accessToken = WoiCandidateModule.localStorage().getString(
        LocalStorageKey.accessToken,
        '',
      );
      const refreshToken = WoiCandidateModule.localStorage().getString(
        LocalStorageKey.refreshToken,
        '',
      );

      // Check if the request path is in an array of paths that don't require authorization

      const isPublicEndpoint = pathsWithoutAuthorization.some((path) =>
        axiosConfig.url?.includes(path),
      );
      if (!isPublicEndpoint && (!accessToken || !refreshToken)) {
        localLogout();
      }

      if (!isPublicEndpoint && accessToken && refreshToken) {
        // Check if the access token is expired
        if (await this.isTokenExpired(accessToken)) {
          // If expired, attempt to refresh the token
          try {
            const newAccessToken = await this.refreshToken(refreshToken);
            axiosConfig.headers.Authorization = `Bearer ${newAccessToken}`;
          } catch (error) {
            // Handle token refresh failure (e.g., redirect to login)
            LOGGER.error('Token refresh failed:', error);
            // You might want to handle this case based on your application requirements
            // For example, redirect the user to the login page
            throw new Error('Token refresh failed');
          }
        } else {
          // If not expired, use the existing access token
          axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
      }
      return axiosConfig;
    });
  }

  private async isTokenExpired(token: string): Promise<boolean> {
    const url = this.baseUrl + ApiEndPoints.ME + '/' + getDeviceId();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // if success then token is not expired
    const result = isHttpSuccessCode(response.status);
    if (result !== this.lastIsTokenExpired) {
      this.lastIsTokenExpired = result;
      LOGGER.info(`Is token expired = ${!result}`);
    }
    return !result;
  }

  private async refreshToken(refreshToken: string): Promise<string | boolean> {
    try {
      const url = this.baseUrl + ApiEndPoints.REFRESH;
      const response = await fetch(url, {
        method: 'POST', // Specify the HTTP method as POST
        headers: {
          'Content-Type': 'application/json', // Specify the content type if needed
          Authorization: `Bearer ${refreshToken}`,
        },
        // Add body data if required for the POST request
        body: JSON.stringify({
          deviceId: WoiCandidateModule.localStorage().getString(
            LocalStorageKey.deviceId,
            '',
          ),
        }),
      });

      // Check if the HTTP status code is in the range 200-299
      if (isHttpSuccessCode(response.status)) {
        // Assuming that a successful response (2xx status) means the token is valid
        const responseData = await response.json();
        if (
          responseData.code === 200 &&
          responseData.data &&
          responseData.data.accessToken
        ) {
          WoiCandidateModule.localStorage().setString(
            LocalStorageKey.accessToken,
            responseData.data.accessToken,
          );
          WoiCandidateModule.localStorage().setString(
            LocalStorageKey.refreshToken,
            responseData.data.refreshToken,
          );

          return responseData.data.accessToken; // Return the new access token
        }
      }

      localLogout();
      return true;
    } catch (error) {
      // If an error occurs (e.g., network error), you may want to handle it appropriately
      LOGGER.error('Error refreshing token: ', error);
      return true;
    }
  }

  private async handleRequest<Res>(
    request: Promise<AxiosResponse<Res>>,
  ): Promise<Res> {
    try {
      const response = await request;
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        LOGGER.error(
          `Axios error in ${error?.config?.method} request to ${error?.config?.url}:`,
          error,
        );
      } else {
        LOGGER.error('Non-Axios error:', error);
      }
      throw error;
    }
  }
  async get<Query, Res>(path: string, query: Query): Promise<Res> {
    const request = this.axiosInstance.get<Res>(path, {
      params: query,
      validateStatus: () => true,
    });
    return this.handleRequest(request);
  }

  async post<Req, Res>(path: string, req: Req): Promise<Res> {
    const request = this.axiosInstance.post<Res>(path, req, {
      validateStatus: () => true,
    });
    return this.handleRequest(request);
  }

  async patch<Req, Res>(path: string, req: Req): Promise<Res> {
    const request = this.axiosInstance.patch<Res>(path, req, {
      validateStatus: () => true,
    });
    return this.handleRequest(request);
  }

  async delete<Req, Res>(path: string, req: Req): Promise<Res> {
    const request = this.axiosInstance.delete<Res>(path, {
      data: req,
      validateStatus: () => true,
    });
    return this.handleRequest(request);
  }
}
