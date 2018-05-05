/* global angular */

(function(angular) {
  'use strict';
  
  angular.module('AngularJS.Footer').controller('FooterController', FooterController);
  
  FooterController.$inject = [];
  
  function FooterController() {
    /* jshint validthis: true */
    var fc = this;
    
    fc.init = init;
    
    init();
    
    function init() {
      
    }
  }
})(angular);
