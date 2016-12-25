angular.module('app').controller('jobsCtrl', function($scope, $state, user) {
  $scope.user = user;
  console.log( 'user:', user );

  $scope.resetForm = () => {
      $scope.newJob = {};
    };


});