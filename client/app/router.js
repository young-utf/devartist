/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gallery', {
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });