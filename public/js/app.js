var app = angular.module('specialBlogApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
                templateUrl: 'index.html',
                controller: 'homeCtrl'
              })
        .when('/articles', {
                templateUrl: 'articles.html',
                controller: 'articlesCtrl'
              })
        .otherwise({
                redirectTo: '/'
              });
  
      $locationProvider.html5Mode(true);
    });
