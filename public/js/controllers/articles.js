'use strict';

angular.module('specialBlogApp').controller('ArticlesCtrl', function (Articles, $scope) {

  $scope.index = function (argument) {
    $scope.articles = Articles.query();
  };

});
