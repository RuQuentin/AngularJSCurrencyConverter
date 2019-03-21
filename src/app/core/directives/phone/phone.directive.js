'use strict';

export default function (app) {

  app.directive('phone', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {

        function parse(value) {
          const parseValue = value.replace(/[^\d]/g, '');
          format(parseValue);
  
          return parseValue;
        }

        function format(value) {
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

          ngModelCtrl.$setViewValue(result);
          ngModelCtrl.$render();
          return result;
        }

        ngModelCtrl.$parsers.push(parse);
        ngModelCtrl.$formatters.push(format);

      }
    };
  });
}