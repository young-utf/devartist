/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .controller('StatusCtrl', function ($scope, $location, $timeout) {
    var path = $location.$$path;

    if (path === '/status') {
      $('#navbar-status').addClass('active');
    }

    $timeout(function () {
      $('.stat-main-img').addClass('active');
    });
  });