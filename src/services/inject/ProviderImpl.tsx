import { EnvId } from '@/constants/EnvironmentConstants';
import { LoggerApi } from '../logging/LoggerApi';
import { SimpleLoggerImpl } from '../logging/LoggerImpl';
import { LocalStorageApi } from '../storage/LocalStorageApi';
import { LocalStorageImpl } from '../storage/LocalStorageImpl';
import { ProviderAPI } from './ProviderAPI';

/**
 * This class instantiates singlton instances for each API interface
 */
export class ProviderImpl implements ProviderAPI {
  envId: EnvId;

  loggerApi: LoggerApi | null = null;
  localStorageApi: LocalStorageApi | null = null;

  constructor(envId: EnvId) {
    this.envId = envId;
  }

  provideLogger(): LoggerApi {
    if (this.loggerApi === null) {
      this.loggerApi = new SimpleLoggerImpl();
    }
    return this.loggerApi;
  }

  provideLocalStorage(): LocalStorageApi {
    if (this.localStorageApi === null) {
      this.localStorageApi = new LocalStorageImpl();
    }
    return this.localStorageApi;
  }
}
