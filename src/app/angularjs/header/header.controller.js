/* global angular */

(function(angular) {
  'use strict';
  
  angular.module('AngularJS.Header').controller('HeaderController', HeaderController);
  
  HeaderController.$inject = [];
  
  function HeaderController() {
    /* jshint validthis: true */
    var hc = this;
    
    hc.init = init;
    
    init();
    
    function init() {
      
    }
    
  }
})(angular);
