describe('Users Service Tests', function() {
  var Users = null,
      Refs = null,
      httpBackend = null;

  var userMock = {
    'uid-1': {
      name: "User 1",
      email: "test1@email.com"
    },
    'uid-2': {
      name: "User 2",
      email: "test2@email.com"
    }
  };

  beforeEach(function() {
    module('Skilltree');
  });

  beforeEach(inject(function($injector) {
    Users = $injector.get('Users');  
    Refs = $injector.get('Refs');
  }));
  
  beforeEach(function(done) {
    Refs.root.set({
      users: userMock
    }, done);
  });
  
  describe('all', function() {
    it('should return a $FirebaseArray', function(done) {
      var users = Users.all();
      expect(users.$loaded).toBeDefined();
      done();
    });

    it('should return users', function(done) {
      Users.all(function(val) {
        expect(val).toEqual(userMock);
        done();
      });
    });
  });

  describe('find', function() {
    it('should return a $FirebaseObject', function(done) {
      var user = Users.find('uid-1');
      expect(user.$loaded).toBeDefined();
      done();
    });

    it('should return a user', function(done) {
      Users.find('uid-1', function(val) {
        expect(val).toEqual(userMock['uid-1']);
        done();
      });
    });
  });

  afterEach(function(done) {
    Refs.root.set(null, done);
  });
});