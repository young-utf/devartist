/**
 * Created by youngmoon on 1/30/15.
 */
'use strict';

angular.module('pupu')
  .controller('AccountCtrl', function ($rootScope, $scope, $location, User, Auth) {
    $scope.join = function () {
      var email = $scope.email;
      var username = $scope.username;
      var password = $scope.password;

      User.save({
        email: email,
        username: username,
        password: password
      }, function (data) {
        console.log(data);
      });
    }
  });