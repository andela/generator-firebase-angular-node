describe('MenuCtrl Tests', function() {

  var scope, controller;

  beforeEach(function() {
    module('<%=gen.angModule%>');
  });

  beforeEach(inject(function($injector) {
    var $controller = $injector.get('$controller');
    var $mdBottomSheet = $injector.get('$mdBottomSheet');

    scope = $injector.get('$rootScope');
    controller = $controller('MenuCtrl', { $scope: scope, $mdBottomSheet: $mdBottomSheet });
  }));

  describe('Initialize Ctrl', function() {
    it('items should be defined', function() {
      expect(scope.items).toBeDefined();
    });

    it('items length should be 2', function() {
      expect(scope.items.length).toEqual(2);
    });
  });

  describe('Select a menu Item', function() {
    beforeEach(function() {
      scope.listItemClick(0);
    });

    it('item clicked should be defined', function() {
      expect(scope.items[0]).toBeDefined();
    });
  });
});
