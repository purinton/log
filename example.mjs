// Example usage for ESM
import log, { log as namedLog, createLogger } from '@purinton/log';

log.info('Hello from example.mjs (default import)', { foo: 'bar' });
namedLog.info('Hello from example.mjs (named import)', { foo: 'bar' });

const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
