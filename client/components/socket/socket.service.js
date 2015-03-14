/**
 * Created by youngmoon on 15. 3. 14..
 */
'use strict';

angular.module('pupu')
  .factory('Socket', function ($rootScope, $location) {
    console.log('Hello socket');
    var socket;
    var userId;
    return {
      init: function () {
        socket = io();
        userId = $rootScope.currentUser._id;
        socket.emit('init', {id: userId});
        this.onNoti();
      },

      sendNoti: function (targetUser) {
        socket.emit('sendNoti', {id: targetUser});
      },

      onNoti: function () {
        socket.on('notiTo' + userId, function () {
          console.log('Got Noti');
          $rootScope.$emit('getNoti');
        })
      }
    }
  });