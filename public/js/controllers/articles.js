'use strict';

angular.module('specialBlogApp').controller('ArticlesCtrl', function (Articles, $scope, $routeParams) {

  $scope.page = $routeParams.page == null ? 1 : parseInt( $routeParams.page );
  $scope.articles = Articles.query({ page: $scope.page });

  $scope.submitArticle = function (data) {
    Articles.save(data, function (saved) {
      if ( saved._id != null ) {
        $scope.message = 'Article ' + data.title + ' save successfully.';
      }
    });
  };

});
