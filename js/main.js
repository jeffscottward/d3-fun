var dataset = [];

for( var i = 0; i < 50; i++){
  dataset.push(Math.round(Math.random()*100));  
}

console.log(dataset);


// Select All represnts p tags TO BE CREATED
d3.select("main").selectAll('div')
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function(d) {
    return d*2 + "px";
  });

  