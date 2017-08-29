/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

const karma = require('karma');
const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    // disable watcher
    autoWatch: false,

    // files to load into karma
    files: [
      { pattern: `test/**/*` }
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
    ],
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.ts': ['webpack']
    },

    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],
    
    // web server port
    port: 8080,
    
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: karma.constants.LOG_INFO,
    
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],
    
    webpack: webpackConfig,

    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true
      }
    },

    singleRun: true
  })
}