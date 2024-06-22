import { LoggerApi } from "../logging/LoggerApi";
import { LocalStorageApi } from "../storage/LocalStorageApi";

/**
 * This class defines the Interfaces that each Provider must create for the platform
 */
export interface ProviderAPI {
    
    provideLogger(): LoggerApi;
    provideLocalStorage(): LocalStorageApi;
    
}