'use strict';

import './converter.scss';
import ConverterComponent from './converter.component';

const converterPageModule = angular.module('myApp', ['ui.router'])

    .config((CurrencyServiceProvider, $stateProvider, $urlRouterProvider) => {
        'ngInject';
        
        CurrencyServiceProvider.congigurateAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('converter', {
                url: '/converter',
                component: 'converter',
            });
    })
    .component('converter', new ConverterComponent());

export default converterPageModule;