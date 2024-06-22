import { EnvId } from '@/constants/EnvironmentConstants';
import { EnvWrapper } from '../../../envWrapper';
import { ApiHandler } from './ApiHandler';
import { AxiosApiHandler } from './AxiosApiHandler';

let API_HANDLER: ApiHandler | null = null;

export function getApiHandler(): ApiHandler {
  if (API_HANDLER === null) {
    const envId: EnvId = EnvWrapper.getEnvironment();
    API_HANDLER = new AxiosApiHandler(envId);
  }
  //eslint-disable-next-line
  return API_HANDLER!!;
}
