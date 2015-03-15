/**
 * Created by youngmoon on 15. 3. 14..
 */
'use strict';

angular.module('pupu')
	.controller('MessageBoxCtrl', function ($rootScope, $scope, $timeout, messageService, Socket) {
		$('.navbar').css('margin-bottom', 0);
    $scope.messageBox = {};
    $scope.tmpMessage = {};

    $timeout(function () {
      console.log($('.msg-list-wrap'));
      angular.element($('.msg-list-wrap')).scrollTop(99999999);
    }, 20);

    messageService.get(function (data) {
      $scope.messageBox = data;
    });

    $scope.sendMessage = function () {
      if (!$scope.tmpMessage.content) {
        console.log('no message');
        return;
      }

      messageService.send({
        sender: $rootScope.currentUser._id,
        content: $scope.tmpMessage.content,
        sended: false
      }, function () {
        console.log('Successfully Sended');
        Socket.sendMessage();
        messageService.get(function (data) {
          $scope.messageBox = data;
        });
        $scope.tmpMessage = {};
      });
    }

    Socket.onMessage(function () {
      messageService.get(function (data) {
        $scope.messageBox = data;
      });
    });

    $scope.toDate = function (date) {
      var a = new Date(date);
      return a.toLocaleTimeString();
    }

    $scope.keydown = function (e) {
      if (e.keyCode === 13) {
        console.log('Yolo');
        $scope.sendMessage();
      }
    }
	});