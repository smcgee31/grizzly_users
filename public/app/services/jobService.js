angular.module('app').service('jobService', function ($http) {

  this.addJob = (newJob, id) => {
    return $http({
      method: 'POST',
      url: '/user?_id=' + id
    }).then((response) => {
      return response;
    });
  };

  this.getUser = (id) => {
    return $http({
      method: 'GET',
      url: '/user?_id=' + id
    }).then((response) => {
      return response;
    });
  };

  this.deleteUser = (id) => {
    return $http({
      method: 'DELETE',
      url: '/user/' + id
    }).then((response) => {
      return response;
    });
  };
});
