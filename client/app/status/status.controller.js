/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .controller('StatusCtrl', function ($rootScope, $scope, $location, $timeout) {
    var path = $location.$$path;

    if (!$rootScope.yumStat) {
      $scope.yumStat = {
        location: 'Seoul',
        filepath: '../yunmi-image.jpg',
        date: new Date
      }
    }

    if (path === '/status') {
      $('#navbar-status').addClass('active');
    }

    $timeout(function () {
      $('.stat-main-img').addClass('active');
    });
  });