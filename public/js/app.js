angular.module('specialBlogApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'btford.markdown',
  'filters',
  'angular-loading-bar',
  'angularMoment'
])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
                templateUrl: '/views/articles.html',
                controller: 'ArticlesCtrl'
              })
        .when('/article/:articleId', {
                templateUrl: '/views/article.html',
                controller: 'ArticleCtrl'
              })
        .when('/articles', {
                templateUrl: '/views/articles.html',
                controller: 'ArticlesCtrl'
              })
        .otherwise({
                redirectTo: '/'
              });
  
      $locationProvider.html5Mode(true);
    });
