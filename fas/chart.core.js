/**
 * Created by eason on 17-4-5.
 */
let color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888"]);

function renderPie(d3) {
    return function(element, dataset, height, width){
        d3.select(element).selectAll('*').remove();

        if(dataset[0][1]==0&&dataset[1][1]==0&&dataset[2][1]==0) return;

        let svg = d3.select(element).append('svg')
            .attr('height', height+100)
            .attr('width', width+100);

        let g = svg.append("g").attr("transform", "translate(" + width/2 + "," + (height/2+50) + ")");

        let radius = Math.min(width, height) / 2;

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
    }
}

function renderCalendar(d3){
    return function(element, dataset, height, width){
        d3.select(element).selectAll('*').remove();

        let cellSize = 30,padding = 10;
        let actualX = 4*cellSize+2*padding,
            actualY = actualX+2*padding;
        let numX = parseInt(width/actualX);

        let color = d3.scaleQuantize()
            .domain([0, 7800])
            .range(["#cccccc","#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]);

        let svg = d3.select(element)
            .selectAll("svg")
            .data(dataset)
            .enter().append("svg")
            .attr("width", actualX)
            .attr("height", actualY)
            .attr("transform",function(d,i) {
                return "translate("+i%numX*actualX+","+parseInt(i/numX)*actualY+")";
            });

        //text
        svg.append("text")
            .attr("transform", function(d) {
                return "translate("+actualX/2+","+2*padding+")";
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", 13)
            .attr("text-anchor", "middle")
            .text(function(d) { return d.clientName; });

        //calendar
        svg.append("g")
            .attr("fill", "none")
            .attr("stroke", "#333")
            .selectAll("rect")
            .data(function(d) { return d.data; })
            .enter().append("rect")
            .attr("width", cellSize)
            .attr("height", cellSize)
            .attr("x", function(d,i) { return padding+i%4*cellSize; })
            .attr("y", function(d,i) { return padding*4+parseInt(i/4)*cellSize; })
            .attr("fill",function(d){ return color(d); })
            .append("title")
            .text(function(d){ return d+" $";});
    }
}

module.exports = {
    renderPie:renderPie,
    renderCalendar:renderCalendar
};