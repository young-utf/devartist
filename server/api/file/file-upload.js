/**
 * Created by youngmoon on 2/15/15.
 */
var fs = require('fs');
var easyimg = require('easyimage');
var gm = require('gm').subClass({ imageMagick: true });
var System = {};
System.out = require('../../common');

exports.upload = function (req, res) {

  System.out.println(req.body);
  System.out.println(req.files);

  // File
  var date = new Date;
  var fileName = date.getFullYear() + date.getMonth() + date.getDay() + date.getTime() + req.files.fileInput.originalname;
  var filePath = './' + req.files.fileInput.path;

  var fileKey = req.body.id + '/' + fileName;
  var buffer = fs.readFileSync(filePath);
  var ext = fileName.split('.');
  ext = ext[ext.length-1];

// Upload
  var startTime = new Date();
  var partNum = 0;
  var partSize = 1024 * 1024 * 5; // Minimum 5MB per chunk (except the last part) http://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadComplete.html
  var numPartsLeft = Math.ceil(buffer.length / partSize);
  var maxUploadTries = 3;
  var multiPartParams = {
    ACL: 'public-read',
    Key: fileKey,
    Expires: 2592000,
    ContentType: 'image/' + ext
  };

  var multipartMap = {
    Parts: []
  };

  function removeFile(file) {
//    file = file.replace('./','/');
    if (file.indexOf('_small') >= 0) {
      fs.unlink(file.replace('_small', ''));
    }
    if (file.indexOf('_medium') >= 0) {
      fs.unlink(file.replace('_medium', ''));
    }
    fs.unlink(file);
  }

  function completeMultipartUpload(s3, doneParams) {
    s3.completeMultipartUpload(doneParams, function(err, data) {
      if (err) {
        console.log("An error occurred while completing the multipart upload");
        console.log(err);
      } else {
        var delta = (new Date() - startTime) / 1000;
        console.log('Completed upload in', delta, 'seconds');
        console.log('Final upload data:', data);
        var location = data.Location;
      }

      getThumbGm();

      function getThumbGm() {
        gm(filePath).size(function (err, file) {
          var ratio = (file.width / file.height).toFixed(10);
          var w, h;
          if (file.width > 305) {
            w = 305;
            h = 305 / ratio;
            h = Math.floor(h);
          } else {
            w = file.width;
            h = file.height;
          }
          var dist = filePath.replace('.' + ext, '_thumb.' + ext);
          var startThumb = new Date();
          gm(filePath).thumb(w, h, dist, file.width/w*100, function(a,b,c) {
            logger.info(a, b, c);

            fileKey = fileKey.replace('.' + ext, '_thumb.' + ext);
            buffer = fs.readFileSync(dist);

            var thumb_params = {
              Body: buffer,
              Bucket: bucket,
              Key: fileKey,
              Expires: 2592000,
              ContentType: 'image/' + ext,
              ACL: 'public-read'
            };
            var deltaThumb = (new Date() - startThumb) / 1000;
            console.log('Completed create thumbnail in', deltaThumb, 'seconds');
            console.log('Start thumbnail upload');
            startTime = new Date();
            s3.putObject(thumb_params, function (err, data) {
              if (err) {
                console.log('Error uploading data: ', err, data);
              } else {
                var return_data = {
                  ratio: ratio,
                  url: location
                };
                delta = (new Date() - startTime) / 1000;
                console.log('Completed Upload Thumbnail in', delta, 'seconds');
                removeFile(filePath);
                removeFile(dist);
                console.log('return data is : ', return_data);
                res.header('Access-Control-Allow-Origin', "*");
                res.send(return_data);
              }
            });
          });
        });
      };
    });
  }

  function uploadPart(s3, multipart, partParams, tryNum) {
    var tryNum = tryNum || 1;
    s3.uploadPart(partParams, function(multiErr, mData) {
      if (multiErr){
        logger.info('multiErr, upload part error:', multiErr);
        if (tryNum < maxUploadTries) {
          logger.info('Retrying upload of part: #', partParams.PartNumber)
          uploadPart(s3, multipart, partParams, tryNum + 1);
        } else {
          logger.info('Failed uploading part: #', partParams.PartNumber)
        }
        res.send(400);
        return;
      }
      multipartMap.Parts[this.request.params.PartNumber - 1] = {
        ETag: mData.ETag,
        PartNumber: Number(this.request.params.PartNumber)
      };
      console.log("Completed part", this.request.params.PartNumber);
      //console.log('mData', mData);
      if (--numPartsLeft > 0) return; // complete only when all parts uploaded

      var doneParams = {
        Bucket: bucket,
        Key: fileKey,
        MultipartUpload: multipartMap,
        UploadId: multipart.UploadId
      };

      completeMultipartUpload(s3, doneParams);
    });
  }

  function s3Upload(param) {
    s3.createMultipartUpload(param, function(mpErr, multipart){
      if (mpErr) { logger.info('Error!', mpErr); return; }

      // Grab each partSize chunk and upload it as a part
      for (var rangeStart = 0; rangeStart < buffer.length; rangeStart += partSize) {
        partNum++;
        var end = Math.min(rangeStart + partSize, buffer.length),
          partParams = {
            Body: buffer.slice(rangeStart, end),
            Bucket: bucket,
            Key: fileKey,
            PartNumber: String(partNum),
            UploadId: multipart.UploadId
          };

        // Send a single part
        logger.info('Uploading part: #', partParams.PartNumber, ', Range start:', rangeStart);
        uploadPart(s3, multipart, partParams);
      }
    });
  }

  s3Upload(multiPartParams);
}