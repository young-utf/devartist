/**
 * Created by youngmoon on 1/30/15.
 */
'use stirct';

angular.module('pupu')
  .factory('Auth', function ($rootScope, $location, $http, $cookieStore) {
    return {
      login: function (user) {
        $http.post('/auth/local', {
          email: user.email,
          password: user.password
        }).success(function (data) {
          console.log(data);
          $rootScope.currentUser = data.user;
          $cookieStore.put('token', data.user._id);
          if (data.yum) {
            $rootScope.yumStat = data.yum.status;
          }
          $location.path('/home');
        }).error(function (data) {
          $cookieStore.remove('token');
          alert(data.errorMSG);
        });
        console.log('login');
      }
    }
  });