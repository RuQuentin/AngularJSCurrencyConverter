'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';
import 'angularjs-geolocation';
import 'ng-autocomplete';
import 'ng-storage';

// import firebase from 'firebase';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';
import adminModule from './pages/admin/admin.module';
import converterModule from './pages/currency-converter/converter.module';
import homeModule from './pages/home/home.module';
import signUpModule from './pages/sign-up/sign-up.module';

// // ==== connecting to firebase ====
// import configFirebase from '../../env'
// firebase.initializeApp(configFirebase);
// // ================================

const App = angular.module(
  "angularApp", [
    // plugins
    uiRouter,
    "geolocation",
    "ngStorage",
    "ngAutocomplete",
    "ngMessages", 
    "oc.lazyLoad",
    "firebase",

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name,
    

    converterModule.name,
    adminModule.name,
    homeModule.name,
    signUpModule.name,
  ]
);

App
  .config(config)
  .run(run);



export default App;
