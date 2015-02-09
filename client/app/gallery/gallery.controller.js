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
    //$timeout(function () {
    //  calPosition();
    //}, 500);
    //function calPosition() {
    //  var layer = $('.gallery-main').width();
    //  var arts = $('.gallery-arts');
    //  var divider = 3;
    //  var artWidth = 351;
    //  arts.css('position', 'absolute');
    //  for(var i = 0; i < arts.length; i++) {
    //    console.log(i%3 + 1);
    //    var horizon = i%3 + 1;
    //    $(arts[i]).css('left', horizon * 360);
    //  }
    //  console.log(layer);
    //  console.log(arts);
    //}

    function layout() {
      var container = document.querySelector('#gallery-arts-container');
      var msnry = new Masonry(container, {
        itemSelector: '.gallery-arts',
        columnWidth: 351,
        gutter: 10
      });
      $timeout(function () {
        msnry.layout();
      }, 200);
    }

    $timeout(function () {
      layout();
    }, 1000);

    $scope.layout = function () {
      console.log('layout');
      layout();
    }

    logger.info($rootScope.currentUser);
    $http.get('/api/arts').
      success(function (data, status) {
        $scope.arts = data;
        $timeout(function () {
          //layout();
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