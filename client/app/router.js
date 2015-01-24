/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });