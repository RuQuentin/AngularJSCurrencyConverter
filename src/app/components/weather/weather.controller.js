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

    getForecastForSavedLocation() {
      const coords = this.localStorageService.getCoordinates();

      if (coords) {
        const { lat, long } = coords;
        this.weatherAPIService.getForecast(lat, long)
        .then(data => {
          this.localStorageService.setCoordinates(lat, long);
          this.weatherData = data;
          this.tableShow = true;
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
          this.weatherData = data;
          this.tableShow = true;
        });
    }

    getForecastForLocal() {
      this.geolocationService.getCoordinates().then(({ lat, long }) => {
        this.weatherAPIService.getForecast(lat, long)
        .then(data => {
          this.localStorageService.setCoordinates(lat, long);
          this.selectedLocation = `${data.city_name}, ${data.country_code}`;
          this.weatherData = data;
          this.tableShow = true;
        });
      });
    }

    $onInit() {
        this.getForecastForSavedLocation();
    }
}