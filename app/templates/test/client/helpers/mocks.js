var UsersServiceMock = {};

var all = function(cb) {
  if(cb) {
    cb(this.data);
  }
  else {
    return {
      $loaded: function () {
        return {
          then: function (cb) {
            cb();
          }
        };
      }
    };
  } 
};

var find = function(id, cb) {
  if(cb) {
    cb(this.data[id]);
  }
  else {
    return {
      $loaded: function () {
        return {
          then: function (cb) {
            var result = {started_at: 100};
            cb(result);
          }
        };
      },
      $save: function () {
        return {
          then: function (cb) {
            cb();
          }
        };
      }
    };
  } 
};

UsersServiceMock.all = all;
UsersServiceMock.find = find;