angular.module('app').service('jobService', function ($http) {

  this.addJob = (newJob, id) => {
    return $http({
      method: 'POST',
      url: '/jobs/' + id,
      data: newJob
    }).then((response) => {
      return response.data;
    });
  };

  
});
