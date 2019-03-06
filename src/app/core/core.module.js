'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import homeService from './services/mock.home.service';
import resolverProvider from './services/resolver.provider';

validationTestDirective(shared);

constants(shared);
storeFactory(shared);
homeService(shared);
resolverProvider(shared);

export default shared;
