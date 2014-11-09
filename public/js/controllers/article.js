'use strict';

angular.module('specialBlogApp').controller('ArticleCtrl', function (Articles, $scope, $routeParams) {
  $scope.article = Articles.get( { articleId: $routeParams.articleId } );
});
