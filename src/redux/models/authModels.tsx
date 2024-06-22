import { ApiResponse } from './commonModels';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  accessToken?: string;
  refreshToken?: string;
  role: {
    id: string;
    name: string;
  };
  candidateId: string | null;
}

export interface AdminUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  userRole: string;
}

export interface AdminUserResponse {
  message: string | string[];
  code: number;
  error?: string;
  data: AdminUser[];
}

export interface SendAuthRequest {
  email: string;
}

export interface SendAuthResponse
  extends ApiResponse<{
    candidateId: any;
    user: User;
  }> {}

export interface ResendOtpRequest {
  email: string;
}

export interface ResendOtpResponse extends ApiResponse<any> {}

export interface VerifyOtpRequest {
  email: string;
  code: string;
  deviceId: string;
}

export interface VerifyOtpResponse extends ApiResponse<User> {}

export interface LogoutRequest {
  deviceId: string;
}

export interface LogoutResponse extends ApiResponse<any> {}
