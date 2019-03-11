'use strict';

export default function (app) {
  app
    .service('weatherAPIService', function ($http, weatherAPIconstants) {
        'ngInject';

        const key = weatherAPIconstants.APIkey;

        this.getData = () => $http({
                method: 'GET',
                url: `http://api.weatherbit.io/v2.0/current?lat=48.4503701&lon=35.0779096&key=${key}`
              })
              .then(({ data }) => data)
              .then(({ data }) => data)
              .then(([ weatherData ]) => weatherData);
    });
}
