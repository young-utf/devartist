/**
 * Created by youngmoon on 15. 3. 14..
 */
'use strict';

angular.module('pupu')
	.controller('MessageBoxCtrl', function ($rootScope, $scope, messageService) {
		$('.navbar').css('margin-bottom', 0);
    $scope.message = {};

    $scope.sendMessage = function () {
      if (!$scope.message.content) {
        console.log('no message');
        return;
      }

      messageService.send({content: $scope.message.content}, function () {

      });
    }

    $scope.keydown = function (e) {
      if (e.keyCode === 13) {
        console.log('Yolo');
        $scope.sendMessage();
      }
    }
	});