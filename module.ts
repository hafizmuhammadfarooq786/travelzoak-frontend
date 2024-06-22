import { ModuleImpl } from '@/Module';
import { ProviderImpl } from '@/services/inject/ProviderImpl';
import { LoggerApi } from '@/services/logging/LoggerApi';
import { EnvWrapper } from './envWrapper';

/*
 * The WoiCandidateModule singleton that will provide all the services
 *
 * Note: declare in top level file so it is available to all files
 */
export const WoiCandidateModule: ModuleImpl = new ModuleImpl(
  new ProviderImpl(EnvWrapper.getEnvironment()),
);

// Logger instance to use for all logging instead of consol.xyz
export const LOGGER: LoggerApi = WoiCandidateModule.logger();
