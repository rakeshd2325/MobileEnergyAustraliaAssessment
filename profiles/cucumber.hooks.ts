const { generate } = require('multiple-cucumber-html-reporter');
var reporter = require('cucumber-html-reporter');
import { CucumberConverter } from 'cucumber-to-junit';
import cucumberJson from 'wdio-cucumberjs-json-reporter';
import fs from 'fs';
import logger from '@wdio/logger';
import { ITestCaseHookParameter } from '@cucumber/cucumber';
const log = logger('hook');
const REPORT_DIR = './reports';
const REPORT_JSON_DIR = './reports/json';
const REPORT_HTML_DIR = './reports/html';
const REPORT_SINGLE_HTML_DIR = './reports/singleHtml';
const junitConverter = new CucumberConverter({
  markUndefinedAsFailed: true // undefined scenario steps will fail the test case
});
export const hooks = {
  // ====================
  // Some hooks
  // ====================
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration obje
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: (configuration: WebdriverIO.Config, capabilities: WebDriver.Capabilities[]) => {
    fs.rmSync(REPORT_DIR, { recursive: true, force: true });
  },

  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: async (exitCode: any, config: any, capabilities: any, results: any) => {
    await generate({
      jsonDir: REPORT_JSON_DIR,
      reportPath: REPORT_HTML_DIR,
      openReportInBrowser: false,
    });
    if (!fs.existsSync(REPORT_SINGLE_HTML_DIR)) {
      fs.mkdirSync(REPORT_SINGLE_HTML_DIR);
    }
    //single HTML report for azure pipeline html viewer 
    await reporter.generate({
      theme: 'bootstrap',
      jsonDir: REPORT_JSON_DIR,
      output: `${REPORT_SINGLE_HTML_DIR}/Report.html`,
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
    });
    //Cucumber JSON to JUnit
    junitConverter.convertToJunit(REPORT_SINGLE_HTML_DIR + '/Report.html.json', REPORT_SINGLE_HTML_DIR + '/JunitResults.xml');
  },

  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
   * @param {Object}                 context  Cucumber World object
   */
  beforeScenario: async (world: ITestCaseHookParameter, context: any) => {
    log.info(`\x1b[32m Scenario: ${world.pickle.name}`);
  },

  /**
   *
   * Runs after a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
   * @param {Object}                 context  Cucumber World object
   */
  afterScenario: async (world: ITestCaseHookParameter, context: any) => {
    try {
      await cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    } catch (e) {
      log.error('Cannot attach screenshot');
      log.error(e);
    }
  },

  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step             step data
   * @param {IPickle}            scenario         scenario pickle
   * @param {Object}             result           results object containing scenario results
   * @param {boolean}            result.passed    true if scenario has passed
   * @param {string}             result.error     error stack if scenario failed
   * @param {number}             result.duration  duration of scenario in milliseconds
   * @param {Object}             context          Cucumber World object
   */
  afterStep: async (step: any, scenario: any, result: any, context: any) => {
    if (result.error) {
      try {
        await cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
      } catch (e) {
        log.error('Cannot attach screenshot');
        log.error(e);
      }
    }
  },

  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step             step data
   * @param {IPickle}            scenario         scenario pickle
   * @param {Object}             context          Cucumber World object
   */
  beforeStep: async (step: any, scenario: any, context: any) => {
    log.info(`\x1b[36m Step: ${step.text}`);
  },
};
