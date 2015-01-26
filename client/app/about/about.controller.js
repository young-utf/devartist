/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .controller('AboutCtrl', function ($scope, $location) {
    var path = $location.$$path;

    if (path === '/about') {
      $('#navbar-about').addClass('active');
    }


    //$('.about-main-image img').css('width', $(window).width() / 2);

  });