
export enum LogLevel {
    TRACE = "TRACE",
    INFO = "INFO",
    DEBUG = "DEBUG",
    WARN = "WARN",
    ERROR = "ERROR"
}

export interface LoggerApi {
    
    trace(msg: string, ...optionalParams: any[]): void;
    
    info(msg: string, ...optionalParams: any[]): void;
    
    debug(msg: string, ...optionalParams: any[]): void;

    warn(msg: string, ...optionalParams: any[]): void;

    error(msg: string, ...optionalParams: any[]): void;
    
    log(logLevel: LogLevel, msg: string, ...optionalParams: any[]): void;

    getLogs(): string[];

}