import { EnvId } from './src/constants/EnvironmentConstants';
import { ENV_ID } from './config';

export class EnvWrapper {
  static getEnvironment(): EnvId {
    switch (ENV_ID) {
      case EnvId.PROD:
        return EnvId.PROD;
      case EnvId.DEV:
        return EnvId.DEV;
      default:
        throw new Error(`EnvId not supported: ${ENV_ID}`);
    }
  }

  static isDebug(): boolean {
    let isDebug = ENV_ID === EnvId.DEV;
    return isDebug;
  }
}
