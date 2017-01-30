angular.module('app').service('jobService', function ($http) {

  this.addJob = (newJob, id) => {
    return $http({
      method: 'POST',
      url: `/addJob/${id}`,
      data: newJob
    }).then((response) => {
      return response.data;
    });
  };

  this.getJobsByPhone = (phone) => {
    return $http({
      method: 'GET',
      url: `/viewJobs/${phone}`
    }).then((response) => {
      return response.data;
    });
  };

  this.getJobsByDate = (date) => {
    return $http({
      method: 'GET',
      url: `/viewJobs/${date}`
    }).then((response) => {
      return response.data;
    });
  };
  
});
