'use strict';

function WeatherController(weatherAPIService, geolocationService, localStorageService) {
    'ngInject';

    this.weatherData = {};
    this.selectedLocation = null;
    this.tableShow = false;

    this.getSavedCoordinates = () => {
      const coords = localStorageService.getCoordinates();

      if (coords) {
        const { lat, long } = coords;
        weatherAPIService.getForecast(lat, long)
        .then(data => {
          localStorageService.setCoordinates(lat, long);
          this.setWeatherData(data);
        });
      }
    }

    this.getForecastForSelected = () => {
      const location = this.autocomplete.details.geometry.location;
      const lat = location.lat();
      const long = location.lng();
      
      weatherAPIService.getForecast(lat, long)
        .then(data => {
          localStorageService.setCoordinates(lat, long);
          this.setWeatherData(data);
        });
    };

    this.getLocal = () => {
      geolocationService.getCoordinates().then(({ lat, long }) => {
        weatherAPIService.getForecast(lat, long)
        .then(data => {
          localStorageService.setCoordinates(lat, long);
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

    this.getSavedCoordinates();
}

export default WeatherController;
