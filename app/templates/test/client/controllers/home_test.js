describe('HomeCtrl unit Test',function() {

  var scope,
  $rootScope,
  $state,
  $mdBottomSheet,
  Authentication,
  controller;

  beforeEach(module('<%=gen.angModule%>'));
  beforeEach(inject(function($injector){
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $mdBottomSheet = $injector.get('$mdBottomSheet');
    Authentication = $injector.get('Authentication');
    scope = $rootScope.$new();

    controller = $controller('HomeCtrl', {
      $scope: scope,
      $state: $state,
      $mdBottomSheet: $mdBottomSheet,
      Authentication: Authentication
    });
  }));

  it('should have the scoped functions defined',function() {
    expect(scope.logout).toBeDefined();
    expect(scope.showMenu).toBeDefined();
  });

  it('scope.showMenu should call $mdBottomSheet.show function',function() {
    spyOn($mdBottomSheet,'show').and.callThrough();
    spyOn($state,'go');

    scope.showMenu();
    
    expect($mdBottomSheet.show).toHaveBeenCalled();
    expect($state.go).not.toHaveBeenCalled();
  });

  it('scope.logout should call Authentication.logout function',function() {
    spyOn(Authentication,'logout');
    spyOn($state,'go');

    scope.logout();

    expect(Authentication.logout).toHaveBeenCalled();
    expect($state.go).toHaveBeenCalled();
  });
});