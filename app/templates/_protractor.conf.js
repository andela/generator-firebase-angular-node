// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {
  // The address of a running selenium server.
  seleniumServerJar: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.44.0.jar', 
  // Make use you check the version in the folder
  allScriptsTimeout: 11000,
  chromeDriver: './node_modules/chromedriver/bin/chromedriver',
  //seleniumAddress: 'http://localhost:8000/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000
  }
};