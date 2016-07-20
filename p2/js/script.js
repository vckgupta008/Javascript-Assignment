function plotLine()
 {
    var margin = {
            top: 20,
            right: 80,
            bottom: 30,
            left: 50
        },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    /*var parseDate = d3.timeParse("%m/%d/%Y");*/

    var x = d3.scaleTime()
        .range([0, width]);

    var y = d3.scaleLinear()
        .range([height, 0]);

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var xAxis = d3.axisBottom(x);

    var yAxis = d3.axisLeft(y);

    var line = d3.line()
        .x(function(d) {
            return x(d.year);
        })
        .y(function(d) {
            return y(d.crimeCount);
        });

    var svg = d3.select("#tab1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //console.log("its going on");
    d3.json("json3.json", function(error, data) {
        if (error) throw error;

        color.domain(d3.keys(data[0]).filter(function(key) {
            return key !== "year";
        }));
/*
        data.forEach(function(d) {
            d.date = parseDate(d.date);
            // console.log(d.date);
        });*/

        var type = color.domain().map(function(name) {
            return {
                name: name,
                values: data.map(function(d) {
                    return {
                        year: d.year,
                        crimeCount: +d[name]
                    };
                })
            };
        });

        //x.domain();
        x.domain(d3.extent(data, function(d) {
            return d.year;
        }));

        y.domain([
            d3.min(type, function(c) {
                return d3.min(c.values, function(v) {
                    return v.crimeCount;
                });
            }),
            d3.max(type, function(c) {
                return d3.max(c.values, function(v) {
                    return v.crimeCount;
                });
            })
        ]);

        svg.append("g")
            .attr("class", "axis  axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis.ticks(20));

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Crime Count in Numbers");

        var city = svg.selectAll(".type")
            .data(type)
            .enter().append("g")
            .attr("class", "type");

        city.append("path")
            .attr("class", "line")
            .attr("d", function(d) {
                return line(d.values);
            })
            .attr("fill","none")
            .style("stroke", function(d) {
                return color(d.name);
            });

        city.append("text")
            .datum(function(d) {
                return {
                    name: d.name,
                    value: d.values[d.values.length - 1]
                };
            })
            .attr("transform", function(d) {
                return "translate(" + x(d.value.year) + "," + y(d.value.crimeCount) + ")";
            })
            .attr("x", 3)
            .attr("dy", ".35em")
            .text(function(d) {
                return d.name;
            });
    });


}



function plotPie() {
    var width = 900;
    var height = 360;
    var radius = Math.min(width, height) / 2;

    /*var color = d3.scale.category20b();*/
    var color = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

     var svg = d3.select('#tab3')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g');
          // .attr('transform', 'translate(' + (width / 2) + 
          //   ',' + (height / 2) + ')');

    d3.json("json2.json", function(error, data) {
        if (error) throw error;
        data.forEach(function(d) {
            d.value = +d.value;
            // return d;
        });      


     var arc = d3.arc()
          .outerRadius(radius)
          .innerRadius(0);

        var pie = d3.pie()
          .value(function(d) { return d.value; })
          .sort(null);

        var path = svg.selectAll('g.arc')
          .data(pie(data))
          .enter()
          .append("g")
          .attr("class","arc")
          .attr("transform","translate("+radius+","+radius+")")
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) { 
            return color[i];
          });
          var legend = svg.selectAll('.legend')                     // NEW
          .data(data)                                   // NEW
          .enter()                                                // NEW
          .append('g')                                            // NEW
          .attr('class', 'legend')                                // NEW
          .attr('transform', function(d, i) {                     // NEW
            return "translate("+(radius*2+50) +"," + (i*20+50)  + ")";        // NEW
          });                                                     // NEW

        legend.append('rect')                                     // NEW
          .attr('width', 18)                          // NEW
          .attr('height', 18)                         // NEW
          .style('fill', function(d,i){
            return color[i];
          })                                   // NEW
          .style('stroke', "black");                                // NEW
          
        legend.append('text')                                     // NEW
          .attr('x', 18 + 3)              // NEW
          .attr('y', 18 - 3)              // NEW
          .text(function(d) { return d.type; });

      }) ;     

}


    function plotBar() {
    var svg = d3.select("#tab2 svg"),
        margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .align(0.1);

    var y = d3.scaleLinear()
        .range([height, 0]);

    var z = d3.scaleOrdinal()
        .range(["#98abc5", "#FF0000", "#7b6888"]);

    var stack = d3.stack();

    d3.json("json1.json", function(error, data) {
        if (error) throw error;
        x.domain(data.map(function(d) {
            return d.year;
        }));
        var drang = d3.keys(data[0]).filter(function(key) {
            return key !== "year";
        });
        //console.log(drang);
        z.domain(drang);
        data.forEach(function(d) {
            d.toProperty = +d.toProperty;
            d.toVehical = +d.toVehical;
            d.toSSP = +d.toSSP;
            d.total = +d.toVehical + d.toSSP + d.toProperty;
            //console.log(d.total);
        });
        //data.sort(function(a, b) { return b.total - a.total; });

        y.domain([0, d3.max(data, function(d) {
            return d.total;
        })]);

        //console.log(d3.keys(data[0]));
console.log(stack.keys(drang)(data));
        g.selectAll(".serie")
            .data(stack.keys(drang)(data))
            .enter().append("g")
            .attr("class", "serie")
            .attr("fill", function(d) {
                return z(d.key);
            })
            .selectAll("rect")
            .data(function(d) {
                return d;
            })
            .enter().append("rect")
            .attr("x", function(d) {
                return x(d.data.year);
            })
            .attr("y", function(d) {
                //console.log(y(d[1]));
                return y(d[1]);

            })
            .attr("height", function(d) {
                return y(d[0]) - y(d[1]);
            })
            .attr("width", x.bandwidth());

        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(10, "s"))
            .append("text")
            .attr("x", 2)
            .attr("y", y(y.ticks(10).pop()))
            .attr("dy", "0.35em")
            .attr("text-anchor", "start")
            .attr("fill", "#000")
            .text("CriminalDamage");

        var legend = g.selectAll(".legend")
            .data(drang.reverse())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                return "translate(0," + i * 20 + ")";
            })
            .style("font", "10px sans-serif");

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .attr("fill", z);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .attr("text-anchor", "end")
            .text(function(d) {
                return d;
            });
    });
}
$('document').ready(function(){
plotLine();
plotBar();
plotPie();
});
