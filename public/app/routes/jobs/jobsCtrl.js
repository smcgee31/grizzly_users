angular.module('app').controller('jobsCtrl', function ($scope, $state, user, jobService) {
  $scope.user = user;
  $scope.jobType = false;

  $scope.addJob = (newJob) => {
    jobService.addJob(newJob, $scope.user._id)
      .then((response) => {
        $scope.newJob = {};
        $scope.jobType = false;
        alert('Job successfully entered');
      });
  };

  $scope.getOneJob = (custPhone) => {
    jobService.getOneJob(custPhone)
      .then((response) => {
        $scope.job = response.data;
      })
  };


});