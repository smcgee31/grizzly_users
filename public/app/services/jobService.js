angular.module('app').service('jobService', function ($http) {

  this.addJob = (newJob, id) => {
    return $http({
      method: 'POST',
    url: `/jobs/${id}`,
      data: newJob
    }).then((response) => {
      return response.data;
    });
  };
  
  this.getOneJob = (custPhone, id) => {
    return $http({
      method: 'GET',
      url: `/jobs/${id}`
    }).then((response) => {
      return response.data;
    });
  };

  
});
