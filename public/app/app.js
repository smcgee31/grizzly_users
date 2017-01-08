angular.module('app', ['ui.router'])

.config( ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
        url: '/'
      , templateUrl: './app/routes/home/homeTmpl.html'
      , controller: 'homeCtrl'
    })
    .state('register', {
        url: '/register'
      , templateUrl: './app/routes/register/registerTmpl.html'
      , controller: 'registerCtrl'
    })
    .state('login', {
        url: '/login'
      , templateUrl: './app/routes/login/loginTmpl.html'
      , controller: 'loginCtrl'
    })
    .state('profile', {
        url: '/profile'
      , templateUrl: './app/routes/profile/profileTmpl.html'
      , controller: 'profileCtrl'
      , resolve: {
        user: (authService, $state) => {
          return authService.getCurrentUser().then((response) => {
            if (!response.data) $state.go('login');
            return response.data;
          }).catch((err) => {
            $state.go('login');
          });
        }
      }
    })
    .state('addJobs', {
        url: '/addJobs'
      , templateUrl: './app/routes/jobs/addJobsTmpl.html'
      , controller: 'jobsCtrl'
      , resolve: {
        user: (authService, $state) => {
          return authService.getCurrentUser().then((response) => {
            if (!response.data) $state.go('login');
            return response.data;
          }).catch((err) => {
            $state.go('login');
          });
        }
      }
    })
    .state('viewJobs', {
        url: '/viewJobs'
      , templateUrl: './app/routes/jobs/viewJobsTmpl.html'
      , controller: 'jobsCtrl'
      , resolve: {
        user: (authService, $state) => {
          return authService.getCurrentUser().then((response) => {
            if (!response.data) $state.go('login');
            return response.data;
          }).catch((err) => {
            $state.go('login');
          });
        }
      }
    });

});