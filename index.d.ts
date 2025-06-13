/**
 * Factory to create a Winston logger instance.
 * @param options Optional logger options.
 * @param options.level Log level (default: process.env.LOG_LEVEL or 'info')
 * @param options.transports Array of Winston transports (default: Console)
 * @returns winston.Logger
 */
export declare function createLogger(options?: {
  level?: string;
  transports?: any[];
}): import('winston').Logger;

/**
 * Default logger instance.
 */
export declare const log: import('winston').Logger;
export default log;
