'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';
import customSort from './directives/directive.table';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import homeService from './services/mock.home.service';
import resolverProvider from './services/resolver.provider';

import workWithCurrencyProvider from './services/converter.provider';
import currencyFilter from './filter/currenyc.filter';

validationTestDirective(shared);

constants(shared);
storeFactory(shared);
homeService(shared);
resolverProvider(shared);
customSort(shared)


workWithCurrencyProvider(shared);
currencyFilter(shared);


export default shared;
