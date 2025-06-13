# [![Purinton Dev](https://purinton.us/logos/brand.png)](https://discord.gg/QSBxQnX7PF)

## @purinton/log [![npm version](https://img.shields.io/npm/v/@purinton/log.svg)](https://www.npmjs.com/package/@purinton/log) [![license](https://img.shields.io/github/license/purinton/log.svg)](LICENSE) [![build status](https://github.com/purinton/log/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/log/actions)

> A minimal, flexible logging library for Node.js, built on top of [winston](https://github.com/winstonjs/winston). Supports both ESM and CommonJS, with TypeScript types included.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ESM Example](#esm-example)
  - [CommonJS Example](#commonjs-example)
- [API](#api)
- [TypeScript](#typescript)
- [Support](#support)
- [License](#license)
- [Links](#links)

## Features

- Simple, consistent logging API for Node.js
- Built on [winston](https://github.com/winstonjs/winston)
- Supports both ESM and CommonJS
- Default and named exports for maximum flexibility
- TypeScript type definitions included

## Installation

```bash
npm install @purinton/log
```

## Usage

### ESM Example

```js
// Default import
import log from '@purinton/log';
// Named import
import { log, createLogger } from '@purinton/log';

log.info('Hello from ESM (default import)!', { foo: 'bar' });
log.info('Hello from ESM (named import)!', { foo: 'bar' });

const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
```

### CommonJS Example

```js
// Default require
const log = require('@purinton/log');
// Named require
const { log: namedLog, createLogger } = require('@purinton/log');

log.info('Hello from CommonJS (default require)!', { foo: 'bar' });
namedLog.info('Hello from CommonJS (named require)!', { foo: 'bar' });

const customLogger = createLogger({ level: 'debug' });
customLogger.debug('Custom logger debug message', { custom: true });
```

## API

### log (default and named export)

A pre-configured logger instance. Available as both the default and a named export (`log`).

- `.info(message, meta?)`
- `.debug(message, meta?)`
- `.warn(message, meta?)`
- `.error(message, meta?)`
- ...and all other [winston](https://github.com/winstonjs/winston) logger methods.

### createLogger(options)

Creates a new [winston](https://github.com/winstonjs/winston) logger instance.

**Options:**

- `level` (string): Log level (default: `process.env.LOG_LEVEL` or `'info'`)
- `transports` (array): Array of winston transports (default: Console)

**Returns:** `winston.Logger`

## TypeScript

Type definitions are included:

```ts
export declare function createLogger(options?: { level?: string; transports?: any[]; }): import('winston').Logger;
export declare const log: import('winston').Logger;
export default log;
```

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://purinton.us/logos/discord_96.png)](https://discord.gg/QSBxQnX7PF)[![Purinton Dev](https://purinton.us/logos/purinton_96.png)](https://discord.gg/QSBxQnX7PF)

**[Purinton Dev on Discord](https://discord.gg/QSBxQnX7PF)**

## License

[MIT © 2025 Russell Purinton](LICENSE)

## Links

- [GitHub](https://github.com/purinton/log)
- [npm](https://www.npmjs.com/package/@purinton/log)
- [Discord](https://discord.gg/QSBxQnX7PF)
- [Winston Logger](https://github.com/winstonjs/winston)
