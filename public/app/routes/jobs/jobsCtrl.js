// Route controller

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

  $scope.getJobsByDate = (date) => {
    jobService.getJobsByDate(date)
      .then((response) => {
        $scope.dateJobs = response.data;
      });
  };

  $scope.getJobsByPhone = (phone) => {
    jobService.getJobsByPhone(phone)
      .then((response) => {
        $scope.phoneJobs = response;
      });
  };

  // $scope.getJobs = (data) => {
  //   if (Number.isInteger(data)) {
  //     $scope.getJobsByPhone(data)
  //       .then((response) => {
  //         $scope.jobs = response.data;
  //       });
  //   } else {
  //     $scope.getJobsByDate(data)
  //       .then((response) => {
  //         $scope.jobs = response.data;
  //       });
  //   }
  // };

});
