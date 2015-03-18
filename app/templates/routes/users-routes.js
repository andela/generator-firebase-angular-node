var async = require('async'),
    Firebase = require('firebase');

module.exports = function (app, rootRef) {
  var usersRef = rootRef.child('users');
  app.get('/api/v1/users', function (req, res) {
    usersRef.once('value', function(snap) {
      var users = snap.val();
      var result = [];
      if(users) {
        async.each(Object.keys(users), function(userId, cb){
          var user = {
            uid: userId,
            email: users[userId].email,
            name: users[userId].name,
            first_name: users[userId].first_name,
            last_name: users[userId].last_name,
            known_as: users[userId].known_as,
            picture: users[userId].picture
          };
          result.push(user);
          cb();
        }, function(err) {
          if(err) return res.status(500).json(err);
          res.status(200).json(result);
        });
      }
      else {
        res.status(200).json(result);
      }
    });
  });

  app.get('/api/v1/users/:id', function (req, res) {
    var userId = req.params.id;
    if(userId) {
      usersRef.child(userId).once('value', function(snap) {
        if(snap.val()) {
          var user = {
            uid: userId,
            email: snap.val().email,
            name: snap.val().name,
            first_name: snap.val().first_name,
            last_name: snap.val().last_name,
            known_as: snap.val().known_as,
            picture: snap.val().picture
          };
          res.status(200).json(user);
        }
        else {
          res.status(404).json({error:'No user found at node `' + userId + '`'});
        }
      });
    }
    else {
      res.status(400).json({error: 'No user Id was passed'});
    }
  });
};
