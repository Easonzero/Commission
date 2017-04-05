const chartcore = require('./chart.core');

/**
 * Created by eason on 17-4-3.
 */

angular.module('chart').factory('ChartFactory',function($window) {
    let d3 = $window.d3;
    let factory = {};

    factory.renderPie = chartcore.renderPie(d3);

    factory.renderCalendar = chartcore.renderCalendar(d3);

    return factory;
});