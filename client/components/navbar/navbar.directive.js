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
            template: 'components/navbar/uploadDailog.html',
            controller: function ($rootScope, $scope, $timeout) {
              $timeout(function () {
                $scope.step = 'choice';
              }, 10);

              $scope.statForm = function () {
                var id = $rootScope.currentUser._id;
                var location = $scope.location;
                if (!location) {
                  alert('Please, Tell me where you are.');
                  $('.input-stat').focus();
                  return;
                }
                $('.uploadingStatus form').attr({
                  action: '/upload/stat/' + location + '/' + id
                }).submit();
              }

              $scope.press = function (e) {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  $scope.statForm();
                }
              }

              $scope.goStep = function (step) {
                console.log(step)
                $scope.step = step;
              }
            }
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