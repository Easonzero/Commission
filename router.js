/**
 * Created by eason on 17-4-3.
 */
const salespersonController = require('./controller/salesperson.controller');
const gunsmith1Controller = require('./controller/gunsmith.search.controller');
const gunsmith2Controller = require('./controller/gunsmith.total.controller');

angular.module('router').config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: './view/salesperson.html',
        controller: salespersonController
    }).
    when('/gunsmith1', {
        templateUrl: './view/gunsmith.search.html',
        controller: gunsmith1Controller
    }).
    when('/gunsmith2', {
        templateUrl: './view/gunsmith.total.html',
        controller: gunsmith2Controller
    }).
    when('/salesperson', {
        templateUrl: './view/salesperson.html',
        controller: salespersonController
    }).otherwise({redirectTo:'/'});
});