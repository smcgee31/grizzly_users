angular.module('app', ['ui.router'])

.config( ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./app/routes/home/homeTmpl.html",
      controller: 'homeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './app/routes/login/loginTmpl.html',
      controller: 'loginCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: './app/routes/profile/profileTmpl.html',
      controller: 'profileCtrl',
      resolve: {
        user: (authService, $state) => {
          return authService.getCurrentUser().then((response) => {
            if (!response.data)
              $state.go('login');
            return response.data;
          }).catch((err) => {
            $state.go('login');
          });
        }
      }
    });

});