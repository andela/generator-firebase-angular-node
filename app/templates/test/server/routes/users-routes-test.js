global._ = require('lodash');
var assert = require("assert"),
    Firebase = require("firebase"),
    request = require('supertest'),
    express = require('express'),
    bodyParser = require('body-parser'),
    config = require('../../../config/config').test;

const rootRef = new Firebase(config.firebase.rootRefUrl);
var app = express();
app.use(bodyParser.json());
var usersRoutes = require('../../../routes/users-routes')(app, rootRef);

describe('users routes', function () {
  beforeEach(function(done) {
    rootRef.set({
      users: {
        'uid-1': {
          email: 'user1@email.com',
          name: 'Test User 1',
          first_name: 'Test',
          last_name: 'User 1',
          known_as: 'User 1',
          picture: 'http://somecdn.com/photo.png',
          ".priority": 1
        },
        'uid-2': {
          email: 'user2@email.com',
          name: 'Test User 2',
          first_name: 'Test',
          last_name: 'User 2',
          known_as: 'User 2',
          ".priority": 2
        },
        'uid-3': {
          email: 'user3@email.com',
          name: 'Test User 3',
          first_name: 'Test',
          last_name: 'User 3',
          known_as: 'User 3',
          picture: 'http://somecdn.com/photo.png',
          ".priority": 3
        },
        'uid-4': {
          email: 'user4@email.com',
          name: 'Test User 4',
          first_name: 'Test',
          last_name: 'User 4',
          known_as: 'User 4',
          ".priority": 4
        }
      }
    }, done);
  });

  describe('GET /users', function() {
    it("responds with json", function(done) {
      request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });

    it("returns all users", function(done) {
      request(app)
      .get('/api/v1/users')
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.length, 4);
        done();
      });
    });
  });

  describe('GET /users/:id', function() {
    describe('User exists', function() {
      it("responds with json", function(done) {
        request(app)
        .get('/api/v1/users/uid-1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
      });

      it("returns a user", function(done) {
        request(app)
        .get('/api/v1/users/uid-1')
        .expect(200)
        .end(function(err, res) {
          var user = res.body;
          assert.equal(user.email, 'user1@email.com');
          done();
        });
      });
    });

    describe('User does not exists', function() {
      it("returns 404", function(done) {
        request(app)
        .get('/api/v1/users/uid-invalid')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
      });
    });
  });

  after(function(done){
    rootRef.set(null, done);
  });
});
