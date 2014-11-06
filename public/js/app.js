angular.module('specialBlogApp', [
  'ngRoute',
  'ngResource'
])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
                templateUrl: 'views/index.html',
                controller: 'HomeCtrl'
              })
        .when('/articles', {
                templateUrl: 'views/articles.html',
                controller: 'ArticlesCtrl'
              })
        .otherwise({
                redirectTo: '/'
              });
  
      $locationProvider.html5Mode(true);
    });
