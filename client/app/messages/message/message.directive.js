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
        if (scope.message.sender._id === $rootScope.currentUser._id) {
          el.addClass('mymessage');
        } else {
          el.addClass('othermessage');
        }

        if (scope.$last) {
          $rootScope.$emit('messageloaded');
        }
        
        scope.toDate = function (date) {
          var a = new Date(date);
          return a.toLocaleTimeString();
        }
      }
    }
  });