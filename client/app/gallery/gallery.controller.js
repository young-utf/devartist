/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .controller('GalleryCtrl', function ($scope, $location, $routeParams, ngDialog) {
    var path = $location.$$path;

    if (path === '/gallery') {
      $('#navbar-gallery').addClass('active');
    }
  });