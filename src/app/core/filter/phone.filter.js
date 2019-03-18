'use strict';

export default function (app) {

    app.filter('phoneFilter', function() {
        return  function (value) {
          let result = '';

          if (value[0]) {
            result += '+' + value[0] + (value[1] || '');
          }
          if (value[2]) {
            result += '-(' + value[2] + (value[3] || '') + (value[4] || '');
          }
          if (value[5]) {
            result += ')-' + value[5] + (value[6] || '') + (value[7] || '');
          }
          if (value[8]) {
            result += '-' + value[8] + (value[9] || '');
          }
          if (value[10]) {
            result += '-' + value[10] + (value[11] || '');
          }

          return result;
        }
    });

}