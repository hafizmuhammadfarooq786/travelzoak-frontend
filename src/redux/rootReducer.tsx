import { combineReducers } from 'redux';
import adminReducer from './slice/adminSlice';
import authReducer from './slice/authSlice';

const rootReducer = combineReducers({
  authReducer,
  adminReducer,
});

export default rootReducer;
