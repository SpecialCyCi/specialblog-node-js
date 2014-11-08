'use strict';

angular.module('specialBlogApp').controller('ArticlesCtrl', function (Articles, $scope) {

  $scope.articles = Articles.query();

  $scope.submitArticle = function (data) {
    Articles.save(data, function (saved) {
      if ( saved._id != null ) {
        $scope.message = 'Article ' + data.title + ' save successfully.';
      }
    });
  };

});
