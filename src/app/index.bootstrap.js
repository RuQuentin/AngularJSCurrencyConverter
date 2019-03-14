'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

// vendor files
import "./index.vendor";

// main App module
import "./index.module";

import "../assets/styles/sass/index.scss";
import '../../node_modules/angular-toastr/dist/angular-toastr.min.css';

angular.element(document).ready(() => {
  angular.bootstrap(document, ['angularApp'], {
    strictDi: true
  });
});
