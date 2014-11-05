'use strict';

app.controller('articlesCtrl', ['$scope', 'Articles', function ($scope) {

  $scope.index = function (argument) {
    $scope.articles = Articles.query();
  };

}]);
