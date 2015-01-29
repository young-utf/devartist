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
      controller: function ($scope, $http, $location, ngDialog) {
        $scope.openUpload = function () {
          ngDialog.open({
            template: 'components/navbar/uploadDailog.html'
          });
        }
      }
    }
  });