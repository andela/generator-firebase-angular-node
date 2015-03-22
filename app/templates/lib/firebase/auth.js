var Firebase = require('firebase'),
    FirebaseTokenGenerator = require('firebase-token-generator'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env];

// Authenticate the server to Firebase
module.exports =  {
  authWithCustomToken: function(cb) {
    var rootRef = new Firebase(config.firebase.rootRefUrl);
    var tokenGenerator = new FirebaseTokenGenerator(config.firebase.secretKey);
    var token = tokenGenerator.createToken({uid: config.firebase.serverUID, isAdmin: true, name: 'node-server'});

    rootRef.authWithCustomToken(token, function(error) {
      if(error) {
        cb(error);
      }
      else {
        cb(null, rootRef);
      }
    });
  }
};