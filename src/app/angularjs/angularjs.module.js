/* eslint-disable no-unused-vars */
/* global angular */
(function(angular) {
  'use strict';
  
  var modules = ['AngularJS.Header', 'AngularJS.Footer'];
  angular.module('AngularJS', modules, AngularJS);
  
  AngularJS.$inject = ['$httpProvider'];
  function AngularJS($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  }
  
})(angular);