describe('Authentication Service Tests', function() {
  var Authentication, Refs;

  beforeEach(module('Skilltree'));

  beforeEach(inject(function($injector) {
    Authentication = $injector.get('Authentication');
    Refs = $injector.get('Refs');
    
  }));
  
  describe("Login", function() {
    describe("Authentication Failure", function() {
      var success = jasmine.createSpy('success');
      
      beforeEach(function() {
        Refs.root.authWithOAuthPopup = function(provider, cb) {
          cb(true, null);
        };
      });

      it('Should test that user is not successfully logged in', function(){
        Authentication.login(success, function(err) {
          expect(success).not.toHaveBeenCalled();
        });
      });
    });

    describe("Authentication Success", function() {
      var error = jasmine.createSpy('error');
      
      beforeEach(function() {
        Refs.root.authWithOAuthPopup = function(provider, cb) {
          cb(false, null);
        };
      });

      it('Should test that a user is successfully logged in', function(){
        Authentication.login(function() {
          expect(error).not.toHaveBeenCalled();
        }, error);
      });
    });
  });
  
  describe("Logout", function() {
    beforeEach(function() {
      spyOn(Refs.root, "unauth");
    });

    it("Should test that the logout function is called", function() {
      Authentication.logout();
      expect(Refs.root.unauth).toHaveBeenCalled();
    });
  });
});