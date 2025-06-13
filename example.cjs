// Example usage file removed in template

// Example usage for CommonJS
const log = require('@purinton/log');
log.info('Hello from example.cjs (default require)', { foo: 'bar' });

const namedLog = require('@purinton/log');
namedLog.info('Hello from example.cjs (named require)', { foo: 'bar' });

const { createLogger } = require('@purinton/log');
const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
