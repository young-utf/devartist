/**
 * Created by youngmoon on 1/30/15.
 */
'use strict';

angular.module('pupu')
  .controller('AccountCtrl', function ($rootScope, $scope, $location, User, Auth) {
    $scope.join = function () {
      var email = $scope.join_email;
      var username = $scope.join_username;
      var password = $scope.join_password;

      if (!email || !username || !password) {
        return false;
      }

      User.save({
        email: email,
        username: username,
        password: password
      }, function (data) {
        $rootScope.currentUser = data;
        $location.path('login');
      }, function (err) {
        $scope.join_email = '';
        $scope.join_username = '';
        $scope.join_password = '';
        alert(err.data.errorMSG);
      });
    }

    $scope.login = function () {
      var email = $scope.login_email;
      var password = $scope.login_password;

      if (!email || !password) {
        return false;
      }

      Auth.login({email: email, password: password});
    }
  });