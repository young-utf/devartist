/**
 * Created by youngmoon on 15. 3. 14..
 */
'use strict';

angular.module('pupu')
	.controller('MessageBoxCtrl', function ($rootScope, $scope, messageService) {
		$('.navbar').css('margin-bottom', 0);
    $scope.messageBox = {};

    messageService.get(function (data) {
      $scope.messageBox = data;
    });

    $scope.sendMessage = function () {
      if (!$scope.message.content) {
        console.log('no message');
        return;
      }

      messageService.send({
        sender: $rootScope.currentUser._id,
        content: $scope.message.content,
        sended: false
      }, function () {
        console.log('Successfully Sended');
        $scope.message = {};
      });
    }

    $scope.keydown = function (e) {
      if (e.keyCode === 13) {
        console.log('Yolo');
        $scope.sendMessage();
      }
    }
	});