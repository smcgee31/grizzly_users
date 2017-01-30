angular.module('app').service('authService', function($http) {

  this.login = (user) => {
    // this endpoint passes to server/services/passport.js and checks for 
    // usernameField: 'email',
    // passwordField: 'password'
    // unless modified from 'email' to 'username'
    return $http({
      method: 'post',
      url:    '/login',
      data:   user
    }).then((response) => {
      return response;
    });
  };

  this.logout = () => {
    return $http({
      method: 'get',
      url:    '/logout'
    }).then((response) => {
      return response;
    });
  };

  this.getCurrentUser = () => {
    return $http({
      method: 'GET',
      url:    '/me'
    }).then((response) => {
      return response;
    });
  };

  this.registerUser = (user) => {
    return $http({
      method: 'POST',
      url:    '/register',
      data:   user
    }).then((response) => {
      return response;
    });
  };

  this.editUser = (id, user) => {
    return $http({
      method: 'PUT',
      url:    "/user/" + id,
      data:   user
    }).then((response) => {
      return response;
    });
  };
  
});
