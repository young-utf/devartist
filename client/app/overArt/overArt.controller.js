/**
 * Created by youngmoon on 2/3/15.
 */
'use strict';

angular.module('pupu')
  .controller('overArtCtrl', function ($scope, $rootScope, $timeout) {
    $scope.overArt = $scope.arts[$scope.overArtIndex];
    $scope.next = function () {
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
  })
  .directive('imageRendered', function ($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, el, attr) {
        el.bind('load', function () {
          var h = this.naturalHeight;
          var w = this.naturalWidth;
          var coverRatio = $('.overArt-main').width() / $('.overArt-main').height();
          var ratio = w / h;
          if (ratio < coverRatio) {
            $(el).addClass('higher');
          } else {
            $(el).addClass('wider');
          }
        });
      }
    }
  });