'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fabulous ' + chalk.red('FirebaseAngularNode') + ' generator!'
    ));

    var prompts = [
      {
        name: 'appName',
        message: 'What is your app\'s name (no spaces please)?'
      },
      {
        name: 'devRootRef',
        message: 'What is your development Firebase url?'
      },
      {
        name: 'devSecret',
        message: 'What is your development Firebase secret key?'
      },
      {
        name: 'testRootRef',
        message: 'What is your test environment Firebase url?'
      },
      {
        name: 'testSecret',
        message: 'What is your test environment Firebase secret key?'
      },

    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.devRootRef = props.devRootRef;
      this.devSecret = props.devSecret;
      this.testRootRef = props.testRootRef;
      this.testSecret = props.testSecret;
      this.angModule = this._.classify(props.appName);
      this.angModuleLower = this.angModule.toLowerCase();

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var genObj = { gen: this };
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        genObj
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        genObj
      );
      this.fs.copy(
        this.templatePath('_gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('_.bowerrc'),
        this.destinationPath('.bowerrc')
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('_server.js'),
        this.destinationPath('server.js')
      );
      this.fs.copy(
        this.templatePath('_karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );
      this.fs.copy(
        this.templatePath('_protractor.conf.js'),
        this.destinationPath('protractor.conf.js')
      );
      this.fs.copy(
        this.templatePath('_circle.yml'),
        this.destinationPath('circle.yml')
      );
      this.fs.copyTpl(
        this.templatePath('app'),
        this.destinationPath('app'),
        genObj
      );
      this.fs.copyTpl(
        this.templatePath('lib'),
        this.destinationPath('lib'),
        genObj
      );
      this.fs.copyTpl(
        this.templatePath('routes'),
        this.destinationPath('routes'),
        genObj
      );
      this.fs.copyTpl(
        this.templatePath('config'),
        this.destinationPath('config'),
        genObj
      );
      this.fs.copyTpl(
        this.templatePath('test'),
        this.destinationPath('test'),
        genObj
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
