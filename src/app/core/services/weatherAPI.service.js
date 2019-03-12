'use strict';

export default function (app) {
  app
    .service('weatherAPIService', function ($http, weatherAPIconstants) {
        'ngInject';

        const key = weatherAPIconstants.APIkey;

        this.getCityForecast = city => $http({
          method: 'GET',
          url: `http://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`
        })
        .then(({ data: { data } }) => data)
        .then(([ weatherData ]) => weatherData);

        this.getCoordinatesForecast = ({ lat, long }) => $http({
          method: 'GET',
          url: `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${key}`
        })
        .then(({ data: { data } }) => data)
        .then(([ weatherData ]) => weatherData);
    });
}
