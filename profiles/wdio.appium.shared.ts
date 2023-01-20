import { config } from './wdio.conf';

config.services = (config.services ? config.services : []).concat([
]);
config.port = 4723;
config.hostname = '0.0.0.0';
config.path = '/wd/hub/';
export default config;
