'use strict';

export default function (app) {
  app
    .service('weatherAPIService', function ($http, weatherAPIconstants) {
        'ngInject';

        const key = weatherAPIconstants.APIkey;

        this.getData = city => $http({
                method: 'GET',
                url: `http://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`
              })
              .then(({ data: { data } }) => data)
              .then(([ weatherData ]) => weatherData);
    });
}
