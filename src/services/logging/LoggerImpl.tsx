import { EnvWrapper } from "../../../envWrapper";
import { getCurrentMillis, isNullOrEmpty } from "../../util/globalFunctions";
import { getYYY_MM_DD_HH_mm_SSForTimestamp } from "../../util/TimeUtil";
import { LoggerApi, LogLevel } from "./LoggerApi";
import { isLogAtLevel } from "./LoggerHelper";

/**
 * Simple Logger implementation that logs to the console and stores all logs in memory
 */
export class SimpleLoggerImpl implements LoggerApi {

    // store all the logs that get posted in memory (used when sending a Problem Report)
    LOGS: string[] = [];

    constructor() {
        this.setupLogger();
    }
    
    log(
        logLevel: LogLevel,
        msg: string,
        ...optionalParams: any[]
    ): void {
        // Only log WARN and ERROR when not in debug/dev
        if (!isLogAtLevel(logLevel)) {
            return;
        }

        const logMsg = `${getYYY_MM_DD_HH_mm_SSForTimestamp(getCurrentMillis())} ${logLevel} ${msg}`;

        switch (logLevel) {
            case LogLevel.TRACE:
                if (shouldLogOptionalParams(optionalParams)) console.trace(logMsg, optionalParams);
                else console.trace(logMsg);
                break;

            case LogLevel.INFO:
                if (shouldLogOptionalParams(optionalParams)) console.info(logMsg, optionalParams);
                else console.info(logMsg);
                break;

            case LogLevel.DEBUG:
                if (shouldLogOptionalParams(optionalParams)) console.debug(logMsg, optionalParams);
                else console.debug(logMsg);
                break;

            case LogLevel.WARN:
                if (shouldLogOptionalParams(optionalParams)) console.warn(logMsg, optionalParams);
                else console.warn(logMsg);
                break;

            case LogLevel.ERROR:
                if (shouldLogOptionalParams(optionalParams)) console.error(logMsg, optionalParams);
                else console.error(logMsg);
                break;
        }
    }

    trace(msg: string, ...optionalParams: any[]) {
        this.log(LogLevel.TRACE, msg, optionalParams);
    }

    info(msg: string, ...optionalParams: any[]) {
        this.log(LogLevel.INFO, msg, optionalParams);
    }

    debug(msg: string, ...optionalParams: any[]) {
        this.log(LogLevel.DEBUG, msg, optionalParams);
    }

    warn(msg: string, ...optionalParams: any[]) {
        this.log(LogLevel.WARN, msg, optionalParams);
    }

    error(msg: string, ...optionalParams: any[]) {
        this.log(LogLevel.ERROR, msg, optionalParams);
    }

    getLogs(): string[] {
        return this.LOGS;
    }

    /**
     * Setup to listen to console log messages and add them to the LOGS store
     */
    setupLogger() {
        const logNormal = console.log;
        const logTrace = console.trace;
        const logInfo = console.info;
        const logDebug = console.debug;
        const logWarn = console.warn;
        const logError = console.error;

        const addToLogs = (logMsg: string, ...optionalParams: any[]) => {
            // add the log message to the in-memory store of log messages
            if (EnvWrapper.isDebug()) {
                if (!isNullOrEmpty(optionalParams) && optionalParams.length > 0) {
                    for (const param of optionalParams) {
                        logMsg += ` ${param}`;
                    }
                }

                this.LOGS.push(logMsg);
            }
        };

        console.log = function(message?: any, ...optionalParams: any[]) {
            logNormal(message);
            addToLogs(message, optionalParams);
        }

        console.trace = function(message?: any, ...optionalParams: any[]){
            logTrace(message);
            addToLogs(message, optionalParams);
        }

        console.info = function(message?: any, ...optionalParams: any[]){
            logInfo(message);
            addToLogs(message, optionalParams);
        }

        console.debug = function(message?: any, ...optionalParams: any[]){
            logDebug(message);
            addToLogs(message, optionalParams);
        }

        console.warn = function(message?: any, ...optionalParams: any[]){
            logWarn(message);
            addToLogs(message, optionalParams);
        }

        console.error = function(message?: any, ...optionalParams: any[]){
            logError(message);
            addToLogs(message, optionalParams);
        }
    }
}

function shouldLogOptionalParams(optionalParams: any[]): boolean {
    return optionalParams?.length > 0;
}
