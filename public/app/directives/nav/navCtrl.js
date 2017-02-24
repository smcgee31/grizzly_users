angular.module('app').controller('navCtrl', function ($scope, authService, $state) {

  $scope.logout = () => {
    authService.logout()
      .then((response) => {
        $state.go('login');
      });
  };

});
