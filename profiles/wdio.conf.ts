import { hooks } from './cucumber.hooks';
export const config: WebdriverIO.Config = {
  // ====================
  // Runner and framework
  // Configuration
  // ====================
  runner: 'local',

  // Log levels
  logLevels: {
    webdriver: 'error',
    '@wdio/cli': 'error',
    '@wdio/local-runner': 'error',
    '@wdio/logger': 'debug',
    'wdio-multiple-cucumber-html-reporter': 'error',
    'cucumber-html-reporter': 'error'
  },
  capabilities: [],
  services: [],
  bail: 0,
  baseUrl: 'localhost',
  waitforTimeout: 20000,
  connectionRetryTimeout: 900000,
  connectionRetryCount: 3,
  reporters: [
    'spec',
    [
      'cucumberjs-json',
      {
        jsonFolder: './reports/json',
        language: 'en',
      },
    ],
  ],
  specs: ['./tests/features/**/*.feature'],
  framework: 'cucumber',
  cucumberOpts: {
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> module used for processing required features
    requireModule: ['@babel/register'],
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    require: [
      './tests/stepdefinitions/*.ts',
      // Or search a (sub)folder for JS files with a wildcard
      // works since version 1.1 of the wdio-cucumber-framework
      // './src/**/*.js',
    ],
    // <string> specify a custom snippet syntax
    snippetSyntax: undefined,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
   tagExpression: '@ios @android',
    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: false,
    // <number> timeout for step definitions
    timeout: 1200000,
  },
  ...hooks,
};
