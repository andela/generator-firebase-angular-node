angular.module('<%=gen.angModuleLower%>.controllers')
.controller('MenuCtrl', ['$scope', '$mdBottomSheet',
  function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Users', state:'users', icon: 'fa-users' },
      { name: 'Logout', state:'logout', icon: 'fa-sign-out' }
    ];

    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  }
]);
