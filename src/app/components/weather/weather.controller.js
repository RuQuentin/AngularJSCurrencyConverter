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
      const {
        temp: temp, 
        app_temp: feelLike, 
        wind_spd: wind, 
        wind_cdir_full: dir, 
        city_name: city, 
        country_code: country
      } = data;

      this.weatherData = {temp, feelLike, wind, dir, city, country};
      this.tableShow = true;
    }

    $onInit() {
        this.getSavedCoordinates();
    }
}