'use strict';

export default function (app) {

    app.directive('preloader', preloaderDirective);

    function preloaderDirective () {
        'ngInject';

        return {
            restrict: 'E',
            template: `
                <div ng-show="show" class="preloader"></div>
            `,
            scope: {
                show : '=',
            },
        };
    }
}