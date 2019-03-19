'use strict';

export default class HomeController {
 constructor  (syncDataService){
  'ngInject';

  this.syncDataService = syncDataService;
  this.currentUserDeals = this.syncDataService.getDealsFromFirebase()
  this.sort = {
    sortingOrder: 'date',
    reverse: false
  }; 
  this.headers = ['Amount From', 'Amount To', 'Commission', 'Currency From', 'Currency To', 'Date', 'Rate'];
}
}
