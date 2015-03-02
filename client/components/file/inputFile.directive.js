/**
 * Created by youngmoon on 2/15/15.
 */
'use strict';

angular.module('pupu')
  .directive('inputFile', function (fileReader) {
    return {
      restrict: 'A',
      link: function (scope, el, attr) {
        var type = attr.inputFile;
        el.bind('change', function (e) {
          if ((e.srcElement || e.target).files[0]) {
            scope[type] = (e.srcElement || e.target).files[0];
            scope.$apply();
            getFile();
          }
        });

        var getFile = function () {
          fileReader.readAsDataUrl(scope[type], scope)
            .then(function (result) {
              if (type === 'pImg') {
                scope.sUser.profileImage = result;
              } else if(type === 'bImg') {
                scope.sUser.bgImage = result;
              }
            });
        }
      }
    }
  });
