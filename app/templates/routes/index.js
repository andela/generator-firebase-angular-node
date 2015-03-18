var userRoutes = require('./users-routes');

module.exports = function (app, config, rootRef) {
  userRoutes(app, rootRef);
  
  app.get('/*',function(req, res){
    res.sendFile("index.html",{root:'./public'});
  });
};