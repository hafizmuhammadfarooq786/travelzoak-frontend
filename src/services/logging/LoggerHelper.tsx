import { EnvWrapper } from "../../../envWrapper";
import { LogLevel } from "./LoggerApi";

/**
 * @param logLevel The LogLevel to get the numeric order value for
 * @returns the numeric order of the logLevel in increasing value, ie. TRACE=0 (lowest), ERROR=4 (highest)
 */
function getLogLevelOrder(logLevel: LogLevel): number {
    switch (logLevel) {
        case LogLevel.TRACE:
            return 0;

        case LogLevel.INFO:
            return 1;

        case LogLevel.DEBUG:
            return 2;

        case LogLevel.WARN:
            return 3;

        case LogLevel.ERROR:
            return 4; 
    }
}

/**
 * @param logLevel the LogLevel to check
 * @returns TRUE if we can log at the logLevel (ie. if we are DEBUG/DEV or gte WARN), FALSE otherwise
 */
export function isLogAtLevel(logLevel: LogLevel): boolean {
    return EnvWrapper.isDebug() || getLogLevelOrder(logLevel) >= getLogLevelOrder(LogLevel.WARN);
}
