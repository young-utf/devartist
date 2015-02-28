/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .controller('AboutCtrl', function ($scope, $location, $timeout) {
    var path = $location.$$path;

    if (path === '/about') {
      $('#navbar-about').addClass('active');
    }

    $timeout(function () {
      $('.about-main-img').addClass('active');
    });


  });