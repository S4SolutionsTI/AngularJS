(function() {
    'use strict';

  angular
    .module('MyAngularApp').controller('MainController', ($scope, $http) => {
      $scope.testData = [];
      $scope.postIt = function postIt() {};
      (function postIt() {
        // alert("posting...");
        // XMLHttpRequest cannot load http://127.0.0.1:1337/. No
        // 'Access-Control-Allow-Origin' header is present on the requested
        // resource. Origin 'null' is therefore not allowed access.
        $http.get('http://localhost:8081/json.json', {
          msg: 'hello from Angular.js!',
        }).success((response) => {
          console.log(response);
          // $scope.$apply(function(){
          // $scope.testData = JSON.parse(response);
          // console.log($scope.testData);
          // });
          $scope.testData = response;
          // $scope.testData = JSON.parse(response);
        }).error(() => {
          console.log('AJAX failed!');
        });
      })
    });
}());
