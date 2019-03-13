'use strict';

function WeatherController(weatherAPIService, geolocationService) {
    'ngInject';

    this.weatherData = {};
    this.selectedLocation = null;
    this.tableShow = false;

    this.getForecastForSelected = () => {
      const location = this.autocomplete.details.geometry.location;
      const lat = location.lat();
      const lng = location.lng();
      
      weatherAPIService.getForecast(lat, lng)
        .then(data => {
          this.setWeatherData(data);
        });
    };

    this.getLocal = () => {
      geolocationService.getCoordinates().then(({ lat, long }) => {
        weatherAPIService.getForecast(lat, long)
        .then(data => {
          this.selectedLocation = `${data.city_name}, ${data.country_code}`;
          this.setWeatherData(data);
        });
      });
    };

    this.setWeatherData = data => {
      this.weatherData.temp = data.temp;
      this.weatherData.feelLike = data.app_temp;
      this.weatherData.wind = data.wind_spd;
      this.weatherData.dir = data.wind_cdir_full;
      this.weatherData.city = data.city_name;
      this.weatherData.country = data.country_code;

      this.tableShow = true;
    };
}

export default WeatherController;
