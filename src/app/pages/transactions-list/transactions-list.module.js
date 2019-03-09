'use strict';

import transactionsListController from './transactions-list.controller.js';
import './transactions-list.scss';

const transactionsListModule = angular.module('transactions-list-module', []);
transactionsListModule.controller('transactionsListController', transactionsListController);

export default transactionsListModule;
