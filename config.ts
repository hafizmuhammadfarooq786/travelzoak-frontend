import { EnvId } from './src/constants/EnvironmentConstants';

// Set APP_ENV=development or APP_ENV=production
// fallback to the development environment if not set in env variables
// this is overwritten during server deployment
export const ENV_ID = process.env.APP_ENV || EnvId.DEV;
