/**
 * Created by youngmoon on 3/15/15.
 */
'use strict';

angular.module('pupu')
  .factory('messageService', function ($rootScope, $http) {
    return {
      get: function (cb) {
        $http.get('/api/message').success(cb);
      },

      send: function (target, cb) {
        $http.post('/api/message', target).success(cb);
      },

      read: function (cb) {

      },

      delete: function (cb) {

      }
    }
  });