import { join } from 'path';
import config from './wdio.appium.shared';
config.capabilities = [
  {
    platformName: 'iOS',
    maxInstances: 1,
    'appium:deviceName': "iPhone 14 Pro Max",
    'appium:platformVersion':"16.2",
    'appium:orientation': "PORTRAIT",
    'appium:automationName': 'XCUITest',
    'appium:app': join(process.cwd(), "./apps/EngergyAustraliaIOSApp.zip"),
    'appium:newCommandTimeout': 320,
    'appium:wdaStartupRetries': 4,
    'appium:isHeadless': true
  },
];
exports.config = config;
