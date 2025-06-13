// Example usage file removed in template

// Example usage for CommonJS
const log = require('@purinton/log');
const { log: namedLog, createLogger } = require('@purinton/log');

log.info('Hello from example.cjs (default require)', { foo: 'bar' });
namedLog.info('Hello from example.cjs (named require)', { foo: 'bar' });

const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
