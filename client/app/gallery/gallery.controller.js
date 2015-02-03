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
    
    $http.get('/api/arts').
      success(function (data, status) {
        $scope.arts = data;

        $timeout(function () {
          var container = document.querySelector('#gallery-arts-container');
          var msnry = new Masonry(container, {
            itemSelector: '.gallery-arts',
            columnWidth: 350,
            gutter: 10,
            transitionDuration: 200
          });
          $timeout(function () {
            msnry.layout();
          }, 0);
        }, 0);
      });
  });