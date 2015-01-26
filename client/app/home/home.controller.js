/**
 * Created by youngmoon on 1/24/15.
 */
'use stirct';
angular.module('pupu')
  .controller('HomeCtrl', function ($scope, $rootScope) {
    console.log('in home');
    $scope.myInterval = 3500;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'assets/images/main-art8.jpg',
        text: '영원히'
      },{
        image: 'assets/images/main-art1.jpg',
        text: '하늘 다리'
      },{
        image: 'assets/images/main-art2.jpg',
        text: '방과 후'
      },{
        image: 'assets/images/main-art6.jpg',
        text: '야리냐 ? '
      },{
        image: 'assets/images/main-art7.jpg',
        text: '야근 후, 개이득'
      },{
        image: 'assets/images/main-art4.jpg',
        text: '사랑'
      },{
        image: 'assets/images/main-art5.jpg',
        text: '밤, 도로'
      });
    };
    $scope.addSlide();
  });


