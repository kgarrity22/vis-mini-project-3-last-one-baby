
 d3.csv("titanic passenger list (2).csv", data => {
         
      console.log("DATA: ", data)
      createSymbolChart(data)
 })
    // end of csv call

    function draw(data) {
        data.forEach(function (d) {
            d.Count = +1;
            d.Survived = ["Perished", "Survived"][d.survived];
            d.Pclass = ["First", "Second", "Third"][d.pclass - 1];
            d.sex = d.sex[0].toUpperCase() + d.sex.substring(1);
        });



        var svg = dimple.newSvg(".myChart", 1000, 600);
        svg.attr("class", "chart");
        var myChart = new dimple.chart(svg, data);

        var category = 'd3.select("#option_1").node().value;'
        if (category === "sex") {
            var x = myChart.addCategoryAxis("x", ["pclass", "sex"]);
            x.addGroupOrderRule(["Female", "Male"]);
        }
        else if (category === "age") {
            var x = myChart.addCategoryAxis("x", ["pclass", "age_category"])
            x.addGroupOrderRule(["Over 30", "30 and under", "no age"]);

        }
        else if (category === "none") {
            var x = myChart.addCategoryAxis("x", ["pclass"]);
        }


        x.addOrderRule(["First", "Second", "Third"]);
        x.title = "Passenger Class";

        var measure = d3.select("#option_2").node().value;
        if (measure === "count") {
            var y = myChart.addMeasureAxis("y", "Count");
            y.title = "Number of Passengers";
        }
        else if (measure === "percentage") {
            var y = myChart.addPctAxis("y", "Count");
            y.title = "Percentage of Passengers";
        }


        var mySeries = myChart.addSeries("Survived", dimple.plot.bar);
        mySeries.addOrderRule(["Survived", "Perished"]);
        myChart.assignColor("Perished", "#e41a1c", "white");
        myChart.assignColor("Survived", "#377eb8", "white");
        var myLegend = myChart.addLegend(10, 10, 500, 10, "right");

        mySeries.getTooltipText = function (e) {
            console.log(e);
            if (measure === "percentage") {
                return [e.aggField, e.xField[1],
                e.cx + " Class",
                "Percentage: " + Math.round(e.height * 1000) / 10 + "%"];

            }
            else if (measure === "count") {
                return [e.aggField, e.xField[1],
                e.cx + " Class",
                "Count: " + e.yCount];
            }
        };

        myChart.draw(1000);

        mySeries.afterDraw = function (shape, data) {
            var myShape = d3.select(shape),
                rect = {
                    x: parseFloat(myShape.attr("x")),
                    y: parseFloat(myShape.attr("y")),
                    width: parseFloat(myShape.attr("width")),
                    height: parseFloat(myShape.attr("height"))
                };



            svg.append("text")
                .attr("x", rect.x + rect.width / 2)
                .attr("y", myChart._heightPixels() + 50)
                .style("text-anchor", "middle")
                .style("font-size", "11px")
                .style("opacity", 1)
                .style("fill", "black")
                // Prevent text cursor on hover and allow tooltips
                .style("pointer-events", "none")
                .text(data.xField[1]);
        };

    };

    function updateChart() {
        d3.select(".chart").remove();
        d3.select("h3").remove();
        d3.csv("titanic passenger list (2).csv", draw);
    };

    d3.select(".input").on('change', (e) => {
        category = e.target.value
        console.log(type)
        updateChart(type);
      });
    d3.csv("titanic passenger list (2).csv", draw); 

// Starting the Zoom Cirlces

 function createSymbolChart(data) {
     var height = 600;
     var width = 1000;

     var scale = 1.0;

     var zoom = d3.behavior.zoom()
         .scale(scale)
         .scaleExtent([1, 5])
         .on("zoom", zoomed);

     var svg = d3.select(".zoomcircles").append("svg")
         .attr("width", width)
         .attr("height", height)
         .call(zoom);
     

     var container = svg.append("g")
         .attr("id", "container")
         .attr("transform", "translate(0,0)scale(1,1)");

     var bbox, viewBox, vx, vy, vw, vh, defaultView;

     var clickScale = 2.0;		// scale used when circle is clicked
     d3.select("button").on("click", reset);
    
     var dots = container.append("g")
         .attr("id", "circles")
         .selectAll("circle")
         .data(data)
         .enter()
         .append("circle")
         .attr("cx", function (d, i) {

             if (i < 50) {
                 return (i + 1) * 18;
             }
             else if (i < 100) {
                 return (i - 50 + 1) * 18;
             }
             else if (i < 150) {
                 return (i - 100 + 1) * 18;
             }
             else if (i < 200) {
                 return (i - 150 + 1) * 18;
             }
             else if (i < 250) {
                 return (i - 200 + 1) * 18;
             }
             else if (i < 300) {
                 return (i - 250 + 1) * 18;
             }
             else if (i < 350) {
                 return (i - 300 + 1) * 18;
             }
             else if (i < 400) {
                 return (i - 350 + 1) * 18;
             }
             else if (i < 450) {
                 return (i - 400 + 1) * 18;
             }
             else if (i < 500) {
                 return (i - 450 + 1) * 18;
             }
             else if (i < 550) {
                 return (i - 500 + 1) * 18;
             }
             else if (i < 600) {
                 return (i - 550 + 1) * 18;
             }
             else if (i < 650) {
                 return (i - 600 + 1) * 18;
             }
             else if (i < 700) {
                 return (i - 650 + 1) * 18;
             }
             else if (i < 750) {
                 return (i - 700 + 1) * 18;
             }
             else if (i < 800) {
                 return (i - 750 + 1) * 18;
             }
             else if (i < 850) {
                 return (i - 800 + 1) * 18;
             }
             else if (i < 900) {
                 return (i - 850 + 1) * 18;
             }
             else if (i < 950) {
                 return (i - 900 + 1) * 18;
             }
             else if (i < 1000) {
                 return (i - 950 + 1) * 18;
             }
             else if (i < 1050) {
                 return (i - 1000 + 1) * 18;
             }
             else if (i < 1100) {
                 return (i - 1050 + 1) * 18;
             }
             else if (i < 1150) {
                 return (i - 1100 + 1) * 18;
             }
             else if (i < 1200) {
                 return (i - 1150 + 1) * 18;
             }
             else if (i < 1250) {
                 return (i - 1200 + 1) * 18;
             }
             else if (i < 1300) {
                 return (i - 1250 + 1) * 18;
             }
             else {
                 return (i - 1300 + 1) * 18;
             }

         })
         .attr("cy", function (d, i) {
             //console.log("I: ", i)
             if (i < 50) {
                 return 10;
             }
             else if (i < 100) {
                 return 30;
             }
             else if (i < 150) {
                 return 50
             }
             else if (i < 200) {
                 return 70
             }
             else if (i < 250) {
                 return 90
             }
             else if (i < 300) {
                 return 110
             }
             else if (i < 350) {
                 return 130
             }
             else if (i < 400) {
                 return 150
             }
             else if (i < 450) {
                 return 170
             }
             else if (i < 500) {
                 return 190
             }
             else if (i < 550) {
                 return 210
             }
             else if (i < 600) {
                 return 230
             }
             else if (i < 650) {
                 return 250
             }
             else if (i < 700) {
                 return 270
             }
             else if (i < 750) {
                 return 290
             }
             else if (i < 800) {
                 return 310
             }
             else if (i < 850) {
                 return 330
             }
             else if (i < 900) {
                 return 350
             }
             else if (i < 950) {
                 return 370
             }
             else if (i < 1000) {
                 return 390
             }
             else if (i < 1050) {
                 return 410
             }
             else if (i < 1100) {
                 return 430
             }
             else if (i < 1150) {
                 return 450
             }
             else if (i < 1200) {
                 return 470
             }
             else if (i < 1250) {
                 return 490
             }
             else if (i < 1300) {
                 return 510
             }
             else {
                 return 530
             }
         })
         .attr("r", 8)
         
         .attr("fill", function (d) {
             if (d.pclass == "1") {
                 return "gold"
             }
             else if (d.pclass == "2") {
                 return "lightblue"
             }
             else if (d.pclass == "3") {
                 return "pink"
             }
             else {
                 return "brown"
             }
         })
         .on("click", clicked)
     
     function getTransform(node, xScale) {
         bbox = node.node().getBBox();
         var bx = bbox.x;
         var by = bbox.y;
         var bw = bbox.width;
         var bh = bbox.height;
         var tx = -bx * xScale + vx + vw / 2 - bw * xScale / 2;
         var ty = -by * xScale + vy + vh / 2 - bh * xScale / 2;
         return { translate: [tx, ty], scale: xScale }
     }

     function clicked(d, i) {
         if (d3.event.defaultPrevented) {
             return; // panning, not clicking
         }

         node = d3.select(this);
         console.log(node)
         var transform = getTransform(node, clickScale);
         console.log(transform)
         container.transition().duration(1000)
             .attr("transform", "translate(" + transform.translate + ")scale(" + transform.scale + ")");
         console.log("container: ", container)
         zoom.scale(transform.scale)
             .translate(transform.translate);
         console.log("zoom: ", zoom)
         scale = transform.scale;
     }


     function zoomed() {
         var translateX = d3.event.translate[0];
         var translateY = d3.event.translate[1];
         var xScale = d3.event.scale;
         container.attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + xScale + ")");
     }

     function reset() {
         scale = 0.0;
         //container.attr("transform", "translate(0,0)scale(1,1)");
         console.log(container)

         var transform = getTransform(container, clickScale)
         console.log(transform)

         console.log("here: ", transform.scale)
         container.transition().duration(1000)

             .attr("transform", "translate(" + [10, 10] + ")scale(" + 1.0 + ")");
         console.log("container: ", container)

         zoom.scale(scale)
             .translate([0, 0]);


     }

 }// end of create Symbol Chart


