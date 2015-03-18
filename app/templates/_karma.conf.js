module.exports = function(config){
  config.set({
    basePath : '',

    files : [
      'public/lib/angular/angular.js',
      'public/lib/angular-mocks/angular-mocks.js',
      'public/lib/angular-ui-router/release/angular-ui-router.js',
      'public/lib/angular-cookies/angular-cookies.js',
      'public/lib/angular-elastic/elastic.js',
      'public/lib/hammerjs/hammer.js',
      'public/lib/jquery/dist/jquery.min.js',
      'public/lib/angular-aria/angular-aria.js',
      'public/lib/angular-material/angular-material.js',
      'public/lib/angular-animate/angular-animate.js',
      'public/lib/angularfire/dist/angularfire.js',
      'public/lib/moment/moment.js',
      'public/lib/firebase/firebase.js',
      'public/js/index.js',
      'public/lib/lodash/lodash.min.js',
      'test/client/helpers/mocks.js',
      'test/client/**/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'public/js/index.js': 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],

    // web server port
    port: 9876,

    //60 seconds timeout to accommodate time for callbacks, for firebase
    captureTimeout: 60000,
    
    autoWatch : true,

    singleRun : false,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    logLevel: config.LOG_INFO,

    colors: true,

    plugins : [
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-jasmine',
    ],

    coverageReporter : {
      type : 'lcov',
      dir : 'coverage/'
    }

  });
};
