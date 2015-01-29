/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      })
      .when('/gallery', {
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/login', {
        templateUrl: 'app/account/login.html',
        controller: 'AccountCtrl'
      })
      .when('/join', {
        templateUrl: 'app/account/join.html',
        controller: 'AccountCtrl'
      })
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });