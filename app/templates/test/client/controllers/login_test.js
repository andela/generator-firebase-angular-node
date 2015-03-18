describe('LoginCtrl unit Test',function() {

  var scope, Authentication;

  beforeEach(module('<%=gen.angModule%>'));
  beforeEach(inject(function($injector){
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    Authentication = $injector.get('Authentication');
    scope = $rootScope.$new();

    controller = $controller('LoginCtrl', {
      $scope: scope,
      Authentication: Authentication
    });
  }));

  describe('Initialize Ctrl', function() {
    it('scope functions should be defined',function() {
      expect(scope.login).toBeDefined();
    });
  });

  describe('$scope.login', function() {
    it('should call Authentication.login', function() {
      spyOn(Authentication, 'login');
      scope.login();
      expect(Authentication.login).toHaveBeenCalled();
    });
  });
});