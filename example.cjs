// Example usage file removed in template

// Example usage for CommonJS
const log = require('@purinton/log');
log.info('Hello from example.cjs (default require)', { foo: 'bar' });
log.info('Primitive value', 42); // NEW: primitive value
log.info('Array value', [1,2,3]); // NEW: array value

const namedLog = require('@purinton/log');
namedLog.info('Hello from example.cjs (named require)', { foo: 'bar' });
namedLog.info('Primitive value', 'test'); // NEW: primitive value

const { createLogger } = require('@purinton/log');
const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
customLogger.debug('Primitive debug', true); // NEW: primitive value
