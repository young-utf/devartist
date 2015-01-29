/**
* Created by youngmoon on 1/23/15.
*/
'use strict';
angular.module('pupu', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngDialog',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        return config;
      },

      responseError: function (response) {
        if (response.status === 401) {
          $location.path('/signin');
        } else {
          return $q.reject(response);
        }
      }
    }
  })
  .run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      $('.navbar-nav li').removeClass('active');
    });
  });
