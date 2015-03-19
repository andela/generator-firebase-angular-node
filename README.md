# FAN(Firebase Angular Node) Stack Generator [![Build Status](https://secure.travis-ci.org/andela/generator-firebase-angular-node.png?branch=master)](https://travis-ci.org/andela-nenegesi/generator-firebase-angular-node)

> Yeoman generator for creating FAN stack applications, using Firebase, AngularJS, and Node - lets you quickly set up a project following best practices. This generator also sets you up with AngularMaterial, AngularFire, and Gulp for running tasks.

## Usage

Install `generator-firebse-angular-node`:
```
npm install -g generator-firebase-angular-node
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo firebase-angular-node`:

Run `gulp` for building, and serving the built app.

## Prerequisites

* Firebase - Create your development and test databases on [Firebase](https://www.firebase.com/).

## Default Configurations

**Client**

* Scripts: `JavaScript`, (no `CoffeeScript`support yet)
* Markup:  `Jade`
* Stylesheets: `CSS`, `Less`
* Design Frameworks: [`AngularMaterialDesign`] (https://material.angularjs.org/#/)
* Angular Routers: `ui-router`
* AngularFire: `Yes`


**Server**

* Database: `Firebase`
* Authentication boilerplate: `Yes`
* oAuth integrations: `Google`

## Injection

A gulp task looks for new files in your `app` folder and automatically injects them in the appropriate places based on an injection block.

* `less` files into `public/css/*.css`
* `js` files into `public/js/index.js`


### App
Sets up a new Firebase + AngularJS + Node app, generating all the boilerplate you need to get started.

Example:
```bash
yo firebase-angular-node
```


## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-animate
* angular-aria
* angular-cookies
* angular-mocks
* angular-material
* angularfire
* firebase
* lodash
* moment
* angular-ui-router
* underscore
* jquery
* angular-elastic

All of these can be updated with `bower update` as new versions are released.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.

## Testing

Running `gulp test` will run the client and server unit tests with karma and mocha.

Use `gulp test:server` to only run server tests.

Use `gulp test:client` to only run client tests.

**Protractor tests**

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

Use `gulp test:e2e` to have protractor go through tests located in the `test/e2e` folder.

## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have gulp launch your app with specific environment variables, add them to the config file: `config/config.js`.

## Project Structure

Overview

    ├── app                     - Frontend part of the application(templates, angular, styles)
    │  ├── 404.jade             - Default template for 404 errors
    │  ├── application.js       - All of the js files from the js folders get concatenated in here
    │  ├── favicon.ico          - Favicon
    │  ├── img                  - All frontend img assets go here
    │  ├── index.jade           - The default home page
    │  ├── js                   - All the frontend js files live here
    │  ├── shared               - All shared templates like header and footer live here
    │  ├── styles               - Less files for styling go here
    │  └── views                - All jade templates get compiled to html and stored here
    ├── bower.json              - Bower dependencies
    ├── circle.yml              - Circle CI config for deployments
    ├── config                  - Where we do the bulk of our apps configuration
    │  ├── config.js            - Config parameters like secret keys go here
    │  └── security-rules.js    - Firebase security rules
    ├── gulpfile.js             - Gulp taskrunner config
    ├── karma.conf.js           - Karma testrunner config
    ├── package.json            - Node dependencies
    ├── protractor.conf.js      - E2E test config for protractor
    ├── routes                  - Server side routes
    │  ├── index.js             - Default express routes for server api
    │  └── users-routes.js      - Users express routes for server api
    ├── server.js               - Node server app
    └── test                    - Tests
        ├── client              - Directory to hold client test files 
        ├── e2e                 - Directory to hold e2e test files
        └── server              - Directory to hold server test files


## Contribute

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a PR, make sure that the commit messages match the [AngularJS conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

When submitting a bugfix, try to write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

See the `travis.yml` for configuration required to run tests.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
