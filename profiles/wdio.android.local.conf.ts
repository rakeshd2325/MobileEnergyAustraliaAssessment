import { join } from 'path';
import config from './wdio.appium.shared';

config.capabilities = [
  {
    platformName: 'Android',
    maxInstances: 1,
    'appium:udid': "emulator-5554",
    'appium:platformVersion': "12.0",
    'appium:orientation':"PORTRAIT",
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), "./apps/android.apk"),
    'appium:fullReset': false,
    'appium:newCommandTimeout': 320,
    'appium:isHeadless': true
  },
];

exports.config = config;
