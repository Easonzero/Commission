const {ipcRenderer} = require('electron');
const fs = require('fs');

/**
 * Created by eason on 17-4-3.
 */

angular.module('chart',[]);
angular.module('calculate',[]);
angular.module('router',['ngRoute','ngMaterial', 'ngMessages','calculate']);
let app = angular.module('app', ['ngMaterial','router','chart']);

require('./fas/cal.service');
require('./fas/chart.factory');
require('./router');

app.controller('appCtrl', ($scope,$mdSidenav)=>{
    $scope.toggleLeft = (e)=>{
        $mdSidenav('left').toggle();
    };

    $scope.back = (e)=>{
        ipcRenderer.send('closed');
    };
});

app.directive('ngResize', ['$window', function($window) {
    return {
        restrict : "A",
        link: function(scope, elem, attrs) {
            scope.onResize = function(element,precent) {
                element.css('height',($window.innerHeight*precent-66)+'px');
            };
            scope.onResize(elem,attrs.hprecent);
            angular.element($window).bind('resize', function() {
                scope.onResize(elem,attrs.hprecent);
            });
        }
    }
}]);

app.directive("ngDrop", function($parse) {
    return {
        restrict : "A",
        link: function(scope, element, attrs) {
            let fn = $parse(attrs['ngDrop'], null,true);
            element.on('dragover dragend dragleave',(e)=>{return false;});
            element.on('drop',(e)=>{
                e.preventDefault();
                scope.$apply(()=>{fn(scope, {$event:event});});
                return false;
            })
        }
    };
});

app.directive("ngChart", function($window,ChartFactory) {
    return {
        restrict : "EA",
        scope:{chartData:'=chartData'},
        link: function(scope, element, attrs) {
            scope.$watch('chartData', function(nv){
                if(!nv) return;
                ChartFactory.render(element[0],nv,$window.innerHeight-96,$window.innerWidth);
            });
        }
    };
});