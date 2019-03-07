'use strict';

export default function (app) {
  app
    .service('homeService', function ($q) {
      'ngInject';
      this.data = [
        { date: '10.10.10', currencyFrom: 'EUR', currencyTo: 'USD', rate: 1.11, amountFrom: 200, amountTo: 222 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '11.11.11', currencyFrom: 'UAH', currencyTo: 'USD', rate: 27.1, amountFrom: 271, amountTo: 10 },
        { date: '12.12.12', currencyFrom: 'EUR', currencyTo: 'USD', rate: 1.11, amountFrom: 100, amountTo: 111 }
      ];

      this.getData = () => {
        const self = this;

        return $q(res => {
          setTimeout(function () {
            res(self.data);
          }, 0);
        })
      };
    })
    .constant('currentUser', 'petya');
}
