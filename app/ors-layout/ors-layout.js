(function () {
    'use strict';

    var app = angular.module('ors-layout', []);

    app.component('orsHeader', {
        templateUrl: 'ors-layout/tmpl/ors-header.html'
    });

    app.component('orsBody', {
        bindings:{
            n:'<'
        },
        templateUrl: 'ors-layout/tmpl/ors-body.html'
    });

    app.component('orsFooter', {
        templateUrl: 'ors-layout/tmpl/ors-footer.html'
    });
})();