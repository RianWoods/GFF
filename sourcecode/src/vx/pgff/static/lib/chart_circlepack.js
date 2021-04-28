/*
# Author: Ivar Vargas Belizario
# Copyright (c) 2020
# E-mail: ivar@usp.br
*/

/* Adapted from: https://observablehq.com/@d3/zoomable-circle-packing
 */

<<<<<<< HEAD
function chart_circlepack(idview, w, data, graph, vertexcolorf){
    var self = this;

    console.log(data);
=======
function chart_circlepack(idview, selft, vertexcolorf){
    var self = this;
    
    self.w = selft.lwidth;
    self.graph = selft.datagff.layoutfeature["graph"];
    
    //self.data = selft.datagff.layoutfeature["tree"];
    //console.log(data);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

//    idview = "#"+idview;

    d3.select(idview).selectAll("svg").remove();
    var svg = d3.select(idview).append("svg")
<<<<<<< HEAD
    .attr("width", w)
    .attr("height", w);

    var margin = 20,
    //    diameter = +svg.attr("width"),
    diameter = +w,
=======
    .attr("width", self.w)
    .attr("height", self.w);

    var margin = 20,
    //    diameter = +svg.attr("width"),
    diameter = +self.w,
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    var color = d3.scaleLinear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);
    
//    var interpolate = d3.interpolateRgbBasis(["yellow","green"]);
//    var n = 40;
//    var color = d3.range(n).map(function(d) {
//      return interpolate(d/(n-1));
//    });

    var pack = d3.pack()
    .size([diameter - margin, diameter - margin])
    .padding(2);

    //d3.json(data, function(error, root) {
    //  if (error) throw error;
<<<<<<< HEAD
    self.root = data;  
=======
    self.root = selft.datagff.layoutfeature["tree"];  
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    self.root = d3.hierarchy(self.root)
      .sum(function(d) { return d.size*50; })
//      .sum(function(d) { return 500; })
      .sort(function(a, b) { return b.value - a.value; });

    var focus = self.root,
      nodes = pack(self.root).descendants(),
      view;
    console.log("nodes", nodes);
    var circle = g.selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "nodex" : "nodex nodex--leaf" : "nodex nodex--root"; })
      .style("fill", function(d) { 
        console.log("d.id", d.id);
<<<<<<< HEAD
        return d.children ? color(d.depth) : vertexcolorf(graph.nodes[d.data.id].weight); })
=======
        return d.children ? color(d.depth) : vertexcolorf(self.graph.nodes[d.data.id].weight); })
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
      .on("click", function(d) { if (focus !== d) self.zoom(d), d3.event.stopPropagation(); });

    var text = g.selectAll("text")
    .data(nodes)
    .enter().append("text")
      .attr("class", "labelx")
      .style("fill-opacity", function(d) { return d.parent === self.root ? 1 : 0; })
      .style("display", function(d) { return d.parent === self.root ? "inline" : "none"; })
      .text(function(d) { return d.data.name; });

    self.node = g.selectAll("circle,text");

    svg.style("background", color(-1))
//      .on("click", function() { zoom(self.root); });
      .on("click", function() { self.zoom(self.root); });


    self.zoom = function(d) {
//    self.zoom = function(d) {
        //    var focus0 = focus;
        var focus = d;
//        var focus = self.root;
        var transition = d3.transition()
            .duration(d3.event.altKey ? 7500 : 750)
            .tween("zoom", function(d) {
              var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
              return function(t) { self.zoomTo(i(t)); };
            });

        transition.selectAll("text")
          .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
            .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
            .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    };

    self.zoomTo = function(v) {
        var k = diameter / v[2]; view = v;
        self.node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
        circle.attr("r", function(d) { return d.r * k; });
    };
    
<<<<<<< HEAD
    self.zoomTo([self.root.x, self.root.y, self.root.r * 2 + margin]);    
=======
    self.zoomTo([self.root.x, self.root.y, self.root.r * 2 + margin]);
    
  self.highlightforce = function (ids) {
    //implementing with ids
  };
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
}
