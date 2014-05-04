var dataset = [];

for( var i = 0; i < 20; i++){
  dataset.push(Math.round(Math.random()*100));  
}

// // Select All represnts p tags TO BE CREATED
var svg = d3.select("main").append("svg")

 svg.attr("width", "500")
    .attr("height", "500")
    .append("rect")
    .attr("width", "200")
    .attr("height", "100")
    .attr("x", "100")
    .attr("y", "200")
    .attr("fill", "green")
 
 svg.append('g')
    .append('circle')
    .attr("cx", "20")
    .attr("cy", "20")
    .attr("r", "25")
    .select("g")
    .append('circle')
    .attr("cx", "20")
    .attr("cy", "20")
    .attr("r", "25");

    