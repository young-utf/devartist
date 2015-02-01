/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      link: function (scope, el, attr) {

      },
      controller: function ($rootScope, $scope, $http, $location, $cookieStore, ngDialog) {
        $scope.openUpload = function () {
          ngDialog.open({
            template: 'components/navbar/uploadDailog.html'
          });
        }

        $scope.logout = function () {
          $rootScope.currentUser = null;
          $cookieStore.remove('token');
          location.href = '/';
        }
      }
    }
  });