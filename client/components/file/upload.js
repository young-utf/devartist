/**
 * Created by youngmoon on 2/15/15.
 */
'use strict';

angular.module('v1App')
  .factory('Upload', function($q, $rootScope, $location){

    function multipartUpload(id) {
      var deferred = $q.defer();
      var files = document.getElementById(id).files;
      var f;

      if (files.length <= 0) {
        deferred.reject();
      }

      for (f = 0; f < files.length; f++) {
        var fr = new FileReader();
        var file = files[f];

        fr.onloadend = function (e) {
          upload(file, e.target.result);
        };
        fr.readAsArrayBuffer(files[f]);
      }

      function upload(file) {

        var fd = new FormData();
        var bkName;

        fd.append("fileInput", file);
        fd.append("id", $rootScope.currentUser._id);

        $.ajax({
          type: 'POST',
          url: '/api/upload/:type',
          data: fd,
          contentType: false,
          processData: false
        }).done(function (data) {
          deferred.resolve(data);
        });
      }

      return deferred.promise;
    }

    return {
      multipartUpload : multipartUpload
    }
  });
