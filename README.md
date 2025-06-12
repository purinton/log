# @purinton/log

[![npm version](https://img.shields.io/npm/v/@purinton/log.svg)](https://www.npmjs.com/package/@purinton/log)
[![license](https://img.shields.io/github/license/purinton/log.svg)](LICENSE)
[![build status](https://github.com/purinton/log/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/log/actions)

A minimal, flexible logging library for Node.js, built on top of [winston](https://github.com/winstonjs/winston).

## Installation

```sh
npm install @purinton/log
```

## Usage

### ESM (import)

```js
import log, { createLogger } from '@purinton/log';

log.info('Hello from ESM!', { foo: 'bar' });

const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
```

### CommonJS (require)

```js
const log = require('@purinton/log');

log.info('Hello from CommonJS!', { foo: 'bar' });

const { createLogger } = require('@purinton/log');
const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
```

## API

### `createLogger(options)`

Creates a new [winston](https://github.com/winstonjs/winston) logger instance.

- `options.level` (string): Log level (default: `process.env.LOG_LEVEL` or `'info'`)
- `options.transports` (array): Array of winston transports (default: Console)

Returns: `winston.Logger`

### Default Export

The default export is a logger instance with default options.

## License

MIT © 2025 Russell Purinton

---

[GitHub](https://github.com/purinton/log) | [npm](https://www.npmjs.com/package/@purinton/log)
