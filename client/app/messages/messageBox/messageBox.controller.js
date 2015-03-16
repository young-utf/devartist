/**
 * Created by youngmoon on 15. 3. 14..
 */
'use strict';

angular.module('pupu')
	.controller('MessageBoxCtrl', function ($rootScope, $scope, $timeout, $document, $window, messageService, Socket) {
		$('.navbar').css('margin-bottom', 0);
    $scope.messageBox = {};
    $scope.tmpMessage = {};
    $('footer').hide();

    function adjust () {
      angular.element($window).scrollTop(angular.element('body').height());
    }

    $rootScope.$on('messageloaded', function () {
      $timeout(function () {
        adjust();
      });
    });

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
      console.log('on message');
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
      adjust();
    }
	});