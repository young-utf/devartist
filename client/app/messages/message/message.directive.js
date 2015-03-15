/**
 * Created by youngmoon on 15. 3. 14..
 */
'use strict';

angular.module('pupu')
  .directive('message', function ($rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'app/messages/message/message.html',
      link: function (scope, el, attr) {
        console.log(scope.message);

        scope.toDate = function (date) {
          var a = new Date(date);
          return a.toLocaleTimeString();
        }
      }
    }
  });