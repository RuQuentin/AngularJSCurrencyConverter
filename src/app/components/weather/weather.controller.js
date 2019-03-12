'use strict';

function WeatherController(weatherAPIService) {
    'ngInject';

    this.weatherData = {};

    weatherAPIService.getData().then(data => {
        this.weatherData.temp = data.temp;
        this.weatherData.feelLike = data.app_temp;
        this.weatherData.wind = data.wind_spd;
        this.weatherData.dir = data.wind_cdir_full;
        this.weatherData.city = data.city_name;
        this.weatherData.country = data.country_code;
    });
}

export default WeatherController;
