import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JobFormValues } from '../models/adminModels';
import { AdminUser } from '../models/authModels';

const initialState: any = {
  status: 'idle',
  error: null,
  loading: true,
  jobs: [],
  jobDetails: null,
  users: [],
};
export const admin = createSlice({
  extraReducers(builder) {},
  name: 'admin',
  initialState: initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<JobFormValues>) => {
      state.jobs = action.payload;
    },
    setJobDetails: (state, action: PayloadAction<JobFormValues | null>) => {
      state.jobDetails = action.payload;
    },
    setAdminUsers: (state, action: PayloadAction<AdminUser[] | null>) => {
      state.users = action.payload;
    },
  },
});

export default admin.reducer;

export const { setJobs, setJobDetails, setAdminUsers } = admin.actions;
