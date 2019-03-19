'use strict';

export default function (app) {
  app
    .provider('weatherAPIService', function() {

      let APIkey = '';
    
      this.setKey = key => APIkey = key;
    
      this.$get = $http => {
        "ngInject";

        return {
          getForecast: coords => $http({
            method: 'GET',
            url: `http://api.weatherbit.io/v2.0/current?lat=${coords.lat}&lon=${coords.long}&key=${APIkey}`
          })
          .then(({ data: { data } }) => data)
          .then(([ weatherData ]) => {
            const {
              temp: temp, 
              app_temp: feelLike, 
              wind_spd: wind, 
              wind_cdir_full: dir, 
              city_name: city, 
              country_code: country
            } = weatherData;
  
            return {temp, feelLike, wind, dir, city, country};
          })
        };
      };
    });
}
