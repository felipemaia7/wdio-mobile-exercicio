import path from 'node:path';

export const config = {
    port: 4723,
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel_6',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(), 'app', 'android.wdio.native.app.v2.2.0.apk'),
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240,
    }],
    
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],

      mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};