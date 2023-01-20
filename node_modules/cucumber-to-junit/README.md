# Overview

Converts [Cucumber.js](https://github.com/cucumber/cucumber-js) json results files to JUnit XML.

Useful for reporting tests in Azure DevOps or Jenkins etc.

# Installation

To install the latest version, run:

    npm i cucumber-to-junit --save

# Usage

## Typescript / ES6:

```typescript
import { CucumberConverter } from 'cucumber-to-junit';

const converter = new CucumberConverter({
  markUndefinedAsFailed: true // undefined scenario steps will fail the test case
});

converter.convertToJunit('path/to/cucumber.json', 'path/to/output.xml');

```

## JavaScript / CommonJS

```javascript
const { CucumberConverter } = require('cucumber-to-junit');

const converter = new CucumberConverter({
  markUndefinedAsFailed: true // undefined scenario steps will fail the test case
});

converter.convertToJunit('path/to/cucumber.json', 'path/to/output.xml');

```

# Development

To run the project:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

# License

[MIT](LICENSE)

# Changelog

## 0.1.3
- Update documentation

## 0.1.2
- Bug fixes

## 0.1.1
- Bug fixes

## 0.1.0
- Initial release
