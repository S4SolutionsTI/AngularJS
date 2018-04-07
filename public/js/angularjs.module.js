/* eslint-disable no-unused-vars */
/* global angular */
(function (angular) {
    'use strict';
    angular
            .module(
                    'MyAngularApp',
                    [],
                    function ($httpProvider) {
                        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
                    });

}(angular));
