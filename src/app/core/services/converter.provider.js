'use strict';

export default function (app) {
  app.provider('CurrencyService', workWithCurrencyProvider);
  
  function workWithCurrencyProvider() {
    const data = [];
    const list = {};

    let API = null;

    return {
      congigurateAPI: url => { API = url; },

      $get: ['$http', function($http) {
        return {
          getResponse() {
            $http({
              method: 'GET',
              url: API
            }).then(response => {
              response.data.forEach((el, i) => {
                list[response.data[i].ccy] = el;
              });

              angular.copy(response.data, data);
            });

            return data;
          },

          getUserDeals: value => {
            const time = new Date();
            const {
              currencyGiveName, 
              currencyReceiveName, 
              tradeValue,
              receiveValue,
              comission
            } = value;

            return {
              date: `${time.getDay()}.${time.getMonth()}.${time.getFullYear()}`,
  
              currencyFrom: currencyGiveName,
              currencyTo: currencyReceiveName,
              
              amountFrom: tradeValue,
              amountTo: receiveValue,
  
              comission: comission
            }
          },

          getList: () => list,
          convertToUAH: (currentlyVal, buyVal) => Number((currentlyVal * buyVal).toFixed(2)),
          convertFromUAH: (sumUAH, buyVal) => Number((sumUAH / buyVal).toFixed(2)),
          convertFromBTCtoUAH: (sumUAH, buyVal, valueUAH) => Number((sumUAH * buyVal * valueUAH).toFixed(2)),

          convertWithFee: (sum, fee) => Number(((sum * fee) / 100).toFixed(2))
        };
      }]
    };
  }
}