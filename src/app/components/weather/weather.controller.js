'use strict';

export default class WeatherController {
    constructor(weatherAPIService, geolocationService, localStorageService) {
        'ngInject';
        
        this.weatherAPIService = weatherAPIService;
        this.geolocationService = geolocationService;
        this.localStorageService = localStorageService;

        this.weatherData = {};
        this.selectedLocation = null;
        this.tableShow = false;
    }

    getSavedCoordinates() {
      const coords = this.localStorageService.getCoordinates();

      if (coords) {
        const { lat, long } = coords;
        this.weatherAPIService.getForecast(lat, long)
        .then(data => {
          this.localStorageService.setCoordinates(lat, long);
          this.setWeatherData(data);
        });
      }
    }

    getForecastForSelected() {
      const location = this.autocomplete.details.geometry.location;
      const lat = location.lat();
      const long = location.lng();
      
      this.weatherAPIService.getForecast(lat, long)
        .then(data => {
          this.localStorageService.setCoordinates(lat, long);
          this.setWeatherData(data);
        });
    }

    getLocal() {
      this.geolocationService.getCoordinates().then(({ lat, long }) => {
        this.weatherAPIService.getForecast(lat, long)
        .then(data => {
          this.localStorageService.setCoordinates(lat, long);
          this.selectedLocation = `${data.city_name}, ${data.country_code}`;
          this.setWeatherData(data);
        });
      });
    }

    setWeatherData(data) {
      this.weatherData.temp = data.temp;
      this.weatherData.feelLike = data.app_temp;
      this.weatherData.wind = data.wind_spd;
      this.weatherData.dir = data.wind_cdir_full;
      this.weatherData.city = data.city_name;
      this.weatherData.country = data.country_code;

      this.tableShow = true;
    }

    $onInit() {
        this.getSavedCoordinates();
    }
}