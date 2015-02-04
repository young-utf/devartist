/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .controller('GalleryCtrl', function ($rootScope, $scope, $location, $routeParams, $http, $timeout, ngDialog) {
    var path = $location.$$path;

    if (path === '/gallery') {
      $('#navbar-gallery').addClass('active');
    }
    function layout() {
      var container = document.querySelector('#gallery-arts-container');
      var msnry = new Masonry(container, {
        itemSelector: '.gallery-arts',
        columnWidth: 350,
        gutter: 10
      });
      $timeout(function () {
        msnry.layout();
      }, 200);
    }

    $scope.layout = function () {
      layout();
    }

    logger.info($rootScope.currentUser);
    $http.get('/api/arts').
      success(function (data, status) {
        $scope.arts = data;
        $timeout(function () {
          layout();
        }, 0);
      });

    $scope.openArt = function (index) {
      $scope.overArtIndex = index;
      ngDialog.open({
        template: 'app/overArt/overArt.html',
        controller: 'overArtCtrl',
        scope: $scope
      });
    }
  })
  .directive('msnry', function ($rootScope, $location) {
    return {
      restrict: 'A',
      link: function (scope, el, attr) {
        el.bind('load', function () {
          if (scope.$last) {
            scope.layout();
          }
        });
      }
    }
  });