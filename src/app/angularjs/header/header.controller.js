/* global angular */

(function(angular) {
    'use strict';

    angular.module('AngularJS.Header').controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope'];

    function HeaderController($scope) {

        $scope.title = 'Hello';

    }
})(angular);