({
	drawOrgChart : function(component, event, helper) {
	
      var treeData ={
                      "name": "Car Manufactures",
                      "children": [
                          { 
                              "name": "BMW",
                              "children": [
                                  { "name": "3 Series" },
                                  { "name": "5 Series" },
                                  { "name": "7 Series" }
                              ]
                          },
                          { "name": "Audi" },
                          { "name": "Toyota"},
                          { "name": "Honda"},
                          { "name": "Suburu"},
                          { "name": "VW",
                            "children" : [
                                { "name" : "Jetta"},
                                { "name" : "Passat"},
                                { "name" : "Tiguan"},
                                { "name" : "Atlas"},
                                { "name" : "Golf"},
                                { "name" : "Beetle"}
                            ] 
                          },
                          { "name": "Hyundai"},
                       ]
                     };
      
      console.log(treeData);
        
     //setting the dimensions and margins of the diagram
     var margin = {top: 40, right:30, bottom:50, left:30};
     var width = 660 - margin.left - margin.right;
     var height = 500 - margin.top - margin.bottom;
        
     //Declare a tree Layout and assign its size
     var treemap = d3.tree()
        	     .size([width, height]);
        
     //Assigns the data to hierarchy using parent-child relationships
     var nodes = d3.hierarchy(treeData, function(d){
            			return d.children;
        		     });
     console.log(nodes);
        
     /*NOTE: This assigns a range of properties to each node including (node.data, node.depth, node.height, node.parent, node.children)
     We are telling the function to use the "children" element from treeData to generate property of the nodes. */
        
     //Map the node data to tree Layout
     nodes = treemap(nodes);
     console.log(nodes);
        
     
     //Append the Map(SVG) to the body of the Lightning Component
     var svg = d3.select("body")   
        	 .append("svg")
        	 	.attr("width", width + margin.left + margin.right)
        	 	.attr("height", height + margin.top + margin.bottom)
        	 .append("g")
        	 	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
     //Add All Links between nodes
     var link = svg.selectAll(".link")
        	   .data(nodes.descendants().slice(1)) //We are not including the main 'root' node as since its drawn from child to parent.
        	   .enter()
        	   .append("path")
        	   .attr("class", "link")
        	   .attr("fill", "none") //Including all the styles directly here as the Style configured is not applied to lighting component.
        	   .attr("stroke", "#ccc")
        	   .attr("stroke-width", "2px")
                   .attr("d", function(d){  //Here Attribute 'd' is used to describe the curve. Using Bezier Curve
            		return "M" + d.x + "," + d.y
                        + "C" + d.x + "," + (d.y + d.parent.y) / 2
                        + " " + d.parent.x + "," + (d.y + d.parent.y) / 2
                        + " " + d.parent.x + "," + d.parent.y
        	    });
     console.log(nodes.descendants());
     console.log(nodes.descendants().slice(1));
        
     //Add Each Node as a Group - Ie, setting up a group
     var node = svg.selectAll(".node")
        		       .data(nodes.descendants())
        		       .enter()
        		       .append("g")
        		            .attr("class", "node node--leaf")
        			    .attr("transform", function(d){
                        		return "translate(" + d.x + "," + d.y + ")";
        			    });
        
     //Add a circle to the node
     node.append("circle")
         .attr("r", 15)
         .attr("fill", "#fff")
         .attr("stroke", "steelblue")
         .attr("stroke-width", "3px");
        
     //Add Text to the node
     node.append("text")
         .attr("dy", ".35em")
         .attr("y", function(d){ return d.children ? -20 : 20;})
         .style("text-anchor", "middle")
         .text(function(d) {return d.data.name; });

    }
})
