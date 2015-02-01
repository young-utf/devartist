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
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Devartist ' + $cookieStore.get('token');
        }
        return config;
      },

      responseError: function (response) {
        if (response.status === 401) {
          alert('401 !!');
          $cookieStore.remove('token');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    }
  })
  .run(function ($rootScope, $location, $cookieStore, $http) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      $('.navbar-nav li').removeClass('active');
    });

    if ($cookieStore.get('token')) {
      $http.post('/auth/token', {
        token: $cookieStore.get('token')
      })
      .success(function (data) {
        $rootScope.currentUser = data;
      });
    }
  });
