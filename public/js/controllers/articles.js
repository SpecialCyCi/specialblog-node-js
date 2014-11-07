'use strict';

angular.module('specialBlogApp').controller('ArticlesCtrl', function (Articles, $scope) {

  $scope.articles = Articles.query();

  $scope.submitArticle = function (data) {
    Articles.save(data);
  };
});
