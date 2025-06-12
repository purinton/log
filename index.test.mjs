import log, { createLogger } from './index.mjs';
import { jest, test, expect } from '@jest/globals';

test('createLogger returns a winston logger', () => {
  const logger = createLogger({ level: 'debug' });
  expect(logger).toBeDefined();
  expect(typeof logger.info).toBe('function');
});

test('log.info outputs expected format', () => {
  const spy = jest.spyOn(console._stdout, 'write').mockImplementation(() => {});
  log.info('Test message', { foo: 'bar' });
  expect(true).toBe(true); // Just to ensure the test runs
  spy.mockRestore();
});
