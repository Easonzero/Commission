/**
 * Created by eason on 17-4-3.
 */
const salespersonController = require('./controller/salesperson.controller');
const gunsmithController = require('./controller/gunsmith.controller');

angular.module('router').config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: './view/salesperson.html',
        controller: salespersonController
    }).
    when('/gunsmith', {
        templateUrl: './view/gunsmith.html',
        controller: gunsmithController
    }).
    when('/salesperson', {
        templateUrl: './view/salesperson.html',
        controller: salespersonController
    }).otherwise({redirectTo:'/'});
});