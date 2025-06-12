// Example usage for ESM
import log, { createLogger } from '@purinton/log';

log.info('Hello from example.mjs', { foo: 'bar' });

const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
