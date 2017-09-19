(function () {
    'use strict';

    var app = angular.module('ors-layout', []);

    app.directive('orsHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'ors-layout/tmpl/ors-header.html'
        };
    });

    app.directive('orsBody', function () {
        return {
            restrict: 'E',
            templateUrl: 'ors-layout/tmpl/ors-body.html'
        };
    });

    app.directive('orsFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'ors-layout/tmpl/ors-footer.html'
        };
    });
})();