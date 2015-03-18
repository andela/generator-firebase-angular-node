angular.module('<%=gen.angModuleLower%>.controllers')
  .controller('UsersCtrl',['$scope', '$stateParams', 'Toast', 'Users',
    function($scope, $stateParams, Toast, Users) {

      $scope.users = Users.all();

      if($stateParams.userId) {
        $scope.users.$loaded().then(function() {
          $scope.selectUser(Users.find($stateParams.userId));
        });
      }

      $scope.selectUser = function(user) {
        $scope.selectedUser = user;
      };

      $scope.updateUser = function() {
        $scope.selectedUser.$save().then(function() {
          Toast($scope.selectedUser.name + ' updated successfully');
        });
      };
    }
  ]);