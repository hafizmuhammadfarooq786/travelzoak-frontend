
export enum LocalStorageKey {
    accessToken = 'accessToken',
    refreshToken = 'refreshToken',
    userCountryCode = 'countryName',
    deviceId = 'deviceId',
    lastAuthCodeRequestedAtMillis = 'lastAuthCodeRequestedAtMillis',
    authCodeAttemptNum = 'authCodeAttemptNum',
}

export interface LocalStorageApi {

    getString(
        key: LocalStorageKey,
        defaultValue?: string | null
    ): string | null | undefined;

    setString(
        key: LocalStorageKey,
        value: string | null | undefined
    ): void;

    getNumber(
        key: LocalStorageKey,
        defaultValue?: number | null
    ): number | null | undefined;

    setNumber(
        key: LocalStorageKey,
        value: number | null | undefined
    ): void;

    getObject(
        key: LocalStorageKey,
        defaultValue?: any | null
    ): any | null | undefined;

    setObject(
        key: LocalStorageKey,
        value: any | null | undefined
    ): void;

    remove(key: LocalStorageKey): void;

    clear(): void;
}