import { SendAuthResponse } from '@/redux/models/authModels';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthenticatedUser {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  jobTitle?: string;
}

export type AuthState = {
  auth: SendAuthResponse | null;
  status: string;
  email: string;
  error: string | null;
  authenticatedUser: AuthenticatedUser | null;
};

const loginState: AuthState = {
  email: '',
  auth: null,
  status: 'idle',
  error: null,
  authenticatedUser: null,
};

export const auth = createSlice({
  name: 'auth',
  initialState: loginState,
  reducers: {
    setAuthError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setAuth: (state, action: PayloadAction<SendAuthResponse>) => {
      state.auth = action.payload;
    },
    setAuthStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setAuthUser: (state, action: PayloadAction<AuthenticatedUser>) => {
      state.authenticatedUser = action.payload;
    },
    setAuthEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    clearAuth: (state) => {
      state.auth = null;
    },
  },
});

export default auth.reducer;

export const {
  setAuth,
  setAuthStatus,
  clearAuth,
  setAuthError,
  setAuthEmail,
  setAuthUser,
} = auth.actions;
