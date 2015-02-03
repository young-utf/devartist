/**
 * Created by youngmoon on 2/3/15.
 */
'use strict';

angular.module('pupu')
  .controller('overArtCtrl', function ($scope, $rootScope, $timeout) {
    console.log($scope.arts);
    $scope.overArt = $scope.arts[$scope.overArtIndex];
    $scope.next = function () {
      console.log('hello');
      if ($scope.overArtIndex < $scope.arts.length - 1) {
        $scope.overArtIndex++;
      } else if ($scope.overArtIndex === $scope.arts.length -1) {
        $scope.overArtIndex = 0;
      }
      $timeout(function () {
        $scope.overArt = $scope.arts[$scope.overArtIndex];
        $('.overArt-main img').fadeIn();
      }, 30);
    }
  });