'use strict';

export default function (app) {
    app.directive("customSort", function() {
        return {
            restrict: 'A',
            transclude: true,    
            scope: {
              order: '=',
              sort: '='
            },
            template : 
              ' <a ng-click="sort_by(order)" class="table__header__item">'+
              '    <span ng-transclude></span>'+
              '    <i ng-class="selectedCls(order)"></i>'+
              '</a>',
            link: function(scope) {
            scope.sort_by = function(newSortingOrder) {       
                let sort = scope.sort;
                
                if (sort.sortingOrder === newSortingOrder){
                    sort.reverse = !sort.reverse;
                }                    
        
                sort.sortingOrder = newSortingOrder;        
            };
            
           
            scope.selectedCls = function(column) {
                if(column === scope.sort.sortingOrder){
                    return ('fas fa-angle-' + ((scope.sort.reverse) ? 'down' : 'up'));
                }
                else{            
                    return'fas fa-sort' 
                } 
            };      
          }
        }
        });
    }