'use strict';

function WeatherController(weatherAPIService, geolocationService) {
    'ngInject';

    this.weatherData = {};

    this.getForecast = city => {
        weatherAPIService.getCityForecast(city)
          .then(data => {
            this.weatherData.temp = data.temp;
            this.weatherData.feelLike = data.app_temp;
            this.weatherData.wind = data.wind_spd;
            this.weatherData.dir = data.wind_cdir_full;
            this.weatherData.city = data.city_name;
            this.weatherData.country = data.country_code;
          });
    };

    this.getLocal = () => {
      geolocationService.getCoordinates().then(coords => {
        weatherAPIService.getCoordinatesForecast(coords)
        .then(data => {
          this.weatherData.temp = data.temp;
          this.weatherData.feelLike = data.app_temp;
          this.weatherData.wind = data.wind_spd;
          this.weatherData.dir = data.wind_cdir_full;
          this.weatherData.city = data.city_name;
          this.weatherData.country = data.country_code;
        });
      });
    }
}

export default WeatherController;
