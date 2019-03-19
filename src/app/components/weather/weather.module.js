'use strict';

import WeatherComponent from './weather.component';
import './weather.scss';
import projectConfigVars from '../../../../config';

const weatherModule = angular.module('weather-module', []);

weatherModule
    .config(weatherAPIServiceProvider => {
        'ngInject';

        weatherAPIServiceProvider.setKey(projectConfigVars.weatherAPIkey);
    })
    .component('weatherComponent', new WeatherComponent());

export default weatherModule;
