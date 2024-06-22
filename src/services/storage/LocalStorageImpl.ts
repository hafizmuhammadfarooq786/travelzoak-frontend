import { isNullOrEmpty } from "@/util/globalFunctions";
import { LocalStorageApi } from "./LocalStorageApi";

export class LocalStorageImpl implements LocalStorageApi {

    getString(
        key: string,
        defaultValue?: string | null | undefined
    ): string | null | undefined {
        const value = localStorage.getItem(key);
        if (isNullOrEmpty(value)) {
            return defaultValue;
        }
        return value;
    }

    setString(
        key: string,
        value: string | null | undefined
    ): void {
        if (isNullOrEmpty(value)) {
            localStorage.removeItem(key);
        } else {
            //eslint-disable-next-line
            localStorage.setItem(key, value!!);
        }
    }

    getNumber(
        key: string,
        defaultValue?: number | null | undefined
    ): number | null | undefined {
        const value = localStorage.getItem(key);
        // cannot check if !value because value could be <=0
        if (value === null || value === undefined) {
            return defaultValue;
        }
        const valueStr = localStorage.getItem(key);
        if (isNullOrEmpty(valueStr)) {
            return defaultValue;
        }
        
        return Number(value);
    }

    setNumber(
        key: string,
        value: number | null | undefined
    ): void {
        if (value === null || value === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, value.toString());
        }
    }

    getObject(
        key: string,
        defaultValue?: any | null | undefined
    ): any | null | undefined {
        const value = localStorage.getItem(key);
        if (value === null || value === undefined) {
            return defaultValue;
        }
        return JSON.parse(value);
    }

    setObject(
        key: string,
        value: any | null | undefined
    ): void {
        if (value === null || value === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    
    remove(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }
}