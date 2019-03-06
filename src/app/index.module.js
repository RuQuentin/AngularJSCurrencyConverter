'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';

import mainModule from './pages/main/main.module';
import converterModule from './pages/currency-converter/converter.module';
import homeModule from './pages/home/home.module';

const App = angular.module(
  "angularApp", [
    // plugins
    uiRouter,
    "ngMessages", 
	"oc.lazyLoad",

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name,
    converterModule.name,
    homeModule.name
  ]
);

App
  .config(config)
  .run(run);



export default App;
