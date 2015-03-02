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
        //logger.info(config);
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Devartist ' + $cookieStore.get('token');
        }
        return config;
      },

      responseError: function (response) {
        if (response.status === 201) {
          console.log('file upload success');
          $location.path('/gallery');
        } else if (response.status === 401) {
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
    $rootScope.yumStat = {};
    $rootScope.$on('$routeChangeStart', function (event, next) {
      $('.navbar-nav li').removeClass('active');
    });

    $http.get('/api/users/yunmi').success(function (data) {
      if (data) {
        $rootScope.yumStat = data.status;
      }
    });

    if ($cookieStore.get('token')) {
      $http.post('/auth/token', {
        token: $cookieStore.get('token')
      })
      .success(function (data) {
        $rootScope.currentUser = data;
        if (!$rootScope.yumStat) {
          $rootScope.yumStat = $rootScope.currentUser.status;
        }
      });
    }
  });
