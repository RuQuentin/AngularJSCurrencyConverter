'use strict';

import footerModule from './components/footer/footer.module';
import headerModule from './components/header/header.module';
import weatherModule from './components/weather/weather.module';

export default angular.module('index.components', [
	footerModule.name,
	headerModule.name,
	weatherModule.name
]);
