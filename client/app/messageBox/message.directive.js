/**
 * Created by youngmoon on 15. 3. 14..
 */
'use strict';

angular.module('pupu')
  .directive('message', function ($rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'app/messageBox/message.html',
      link: function (scope, el, attr) {
        console.log(el);
      }
    }
  })