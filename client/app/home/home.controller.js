/**
 * Created by youngmoon on 1/24/15.
 */
'use stirct';
angular.module('pupu')
  .controller('HomeCtrl', function ($scope, $rootScope) {
    console.log('in home');
    $scope.myInterval = 4500;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'assets/images/main-art1.jpg',
        text: '하늘 다리'
      },{
        image: 'assets/images/main-art2.jpg',
        text: '방과 후'
      },{
        image: 'assets/images/main-art3.jpg',
        text: '마음의 동요'
      });
    };
    $scope.addSlide();
  });


