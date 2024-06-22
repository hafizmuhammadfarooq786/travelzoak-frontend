import { LocalStorageApi } from '@/services/storage/LocalStorageApi';
import { ProviderAPI } from './services/inject/ProviderAPI';
import { LoggerApi } from './services/logging/LoggerApi';

export class ModuleImpl {
  providerApi: ProviderAPI;

  constructor(providerApi: ProviderAPI) {
    this.providerApi = providerApi;
  }

  logger(): LoggerApi {
    return this.providerApi.provideLogger();
  }

  localStorage(): LocalStorageApi {
    return this.providerApi.provideLocalStorage();
  }
}
