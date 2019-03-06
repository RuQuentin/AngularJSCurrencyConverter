'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        });

    app.constant('converterConstants', {
        'fee': [0, 1, 2, 3, 4, 5]
    });
}
