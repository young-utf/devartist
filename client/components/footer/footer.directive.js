/**
 * Created by youngmoon on 1/24/15.
 */
'use strict';

angular.module('pupu')
  .directive('footer', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/footer/footer.html',
      link: function (scope, elem, attr) {

      },
      controller: function ($scope, $location) {
        console.log('footer');
      }
    }
  });