angular.module('specialBlogApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'btford.markdown'
])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
                templateUrl: '/views/index.html',
                controller: 'HomeCtrl'
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
