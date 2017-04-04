/**
 * Created by eason on 17-4-3.
 */
angular.module('chart').factory('ChartFactory',function($window) {
    let d3 = $window.d3;
    let factory = {};

    let color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888"]);

    factory.render = function (element, dataset, height, width) {
        d3.select(element).selectAll('*').remove();

        if(dataset[0][1]==0&&dataset[1][1]==0&&dataset[2][1]==0) return;

        let svg = d3.select(element).append('svg')
            .attr('height', height - 20)
            .attr('width', width - 20);

        let g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        let radius = Math.min(width-250, height-250) / 2;

        let pie = d3.pie()
            .value(function (d) {
                return d[1];
            });

        let path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        let label = d3.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);

        let arc = g.selectAll(".arc")
            .data(pie(dataset))
            .enter().append("g")
            .attr("class", "arc");

        arc.append("path")
            .attr("d", path)
            .attr("fill", function (d,i) {
                return color(i);
            });

        arc.append("text")
            .attr("transform", function (d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .attr("dy", "0.35em")
            .text(function (d) {
                return d.data[0];
            });
    };
    return factory;
});