angular.module('app').controller('jobsCtrl', function($scope, $state, user, jobService) {
  $scope.user = user;
  console.log( 'user:', user );

  $scope.resetForm = () => {
      $scope.newJob = {};
    };

  $scope.addJob = ( newJob ) => {
    jobService.addJob( newJob, $scope.user._id )
      .then(( response ) => {
        alert('Job successfully entered');
        console.log( 'response:', response );
        $scope.newJob = {};
      });
  };
});