/* global angular */

(function(angular) {
  'use strict';
  
  angular.module('AngularJS.Body').controller('BodyController', BodyController);
  
  BodyController.$inject = [];
  
  function BodyController() {
    /* jshint validthis: true */
    var bc = this;
    
    bc.init = init;
    
    init();
    
    function init() {
      
    }
  }
})(angular);
