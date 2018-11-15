# D3-Notes

D3 -- Data Driven Documents
      Used to easily Visualize and Interact with Data
      
In D3, there is lot of creativity. There is lot of ways we can analyze and express data.
      
### Prominent Examples of D3:

1. 2013 Obama Budget Proposal : 
https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html?hp

2. Who will win the Presidency? : 
https://projects.fivethirtyeight.com/2016-election-forecast/

3. Is it Better to Rent or Buy? : 
https://www.nytimes.com/interactive/2014/upshot/buy-rent-calculator.html

4. Websites using D3
https://christopheviau.com/d3list/gallery.html


### A) Selection of DOM Elements: (DOM Traversal)

Using D3, we can select DOM elements. There are 2 methods to do this
```
  A. d3.select() --> Returns only the first element matching the criteria
  B. d3.selectAll() --> Returns all the elements matching the criteria
```

Examples:
```
d3.select('h1'); --> Using HTML Elements
d3.select('.cssClassName'); --> Using CSS Class Name
d3.select('#myDiv'); --> Selection Using ID
```

### B) Manipulation of DOM Elements:

With D3 we can manipulate DOM Elements using various functions. 

There are 3 main functions to do this
- d3.select('p').attr
- d3.select('p').style
- d3.select('p').append
- d3.select('p').text
    
Using "attr" We will be able to change the attributes of the HTML Element
```
d3.select('p').attr('class', 'heading');
```

Using "style", we would be able to change the css of the HTML Element.

```
d3.select('h1').style('color','red');
```

Using "append", we would be able to add the elements inside of the HTML Tags

```
d3.select('body').append('p').text('This is Appended Text');
```

If we want to update the text of the DOM Element, we can use the "text" property

```
d3.select('h1').text('Updated Text');
```

We can chain multiple functions using the dot notation.

```
d3.select('h1').style('color', 'red')
               .attr('class', 'heading');
```

### C) Associating Nodes and Data in D3

Here is a simple syntax in D3 on how we associate node and data together.

```
d3.select(..).selectAll(..).data(..).enter()..
```

Let's consider an example

```
d3.select("body")   //Selecting First Body Tag in DOM
  .selectAll("p")
  .data([1,2,3,4,5,6,7,8,9,10]) //Array of data
  .enter() //Every element in the array is bound to one node in our selection
  .append("p") //Appending 1 Paragraph for every element of the Array
      .text(function(d){ //Here 'd' is the data element in the Array
            return d;
      })
```

NOTE: We can also load data from CSV or JSON Files.

```
d3.csv("filename.csv", function(data) {..})
d3.json("filename.json", function(data) {..})
```

Sample CSV dataset

![image](https://user-images.githubusercontent.com/2145211/47959837-4cceb780-dfc4-11e8-9888-0635bc4e8af6.png)


Lets assume that we are only going to work with the following columns and try to visualize.
A. Player
B. Result
C. Converted_x
D. Converted_y

### 4) Beyond DOM: SVG

Question is how are we going to visualize the CSV file in D3.

SVG : Scalable Vector Graphics (It is a type of Image Format)
We can draw lines, shapes and text on SVGs


Example of SVG
```
<svg width="600" height="200">
      <circle cx="100" cy="100" r="5"></circle>
      <circle cx="200" cy="100" r="15"></circle>
      <circle cx="300" cy="100" r="25" fill="blue"></circle>
</svg>
```

OUTPUT:
![image](https://user-images.githubusercontent.com/2145211/47966326-28ec8f80-e01f-11e8-8b9f-417dd6d81601.png)


SVG follows the same DOM tree.
So, we would be able to interact with SVG, the same way we are able to interact with HTML.

Additional Examples using SVG

Let's say if we want to draw a line, then we can use the (X1,Y1) and (X2,Y2) Coordinates

```
var line = svg.append("line")
              .attr("x1", 100)
              .attr("y1", 50)
              .attr("x2", 500)
              .attr("y2", 50)
              .attr("stroke", "red")
              .attr("stroke-width", 5)
              
```
For Rectangle, we have to provide X and Y Co-ordinates, Height and Width.

```
var Rect = svg.append("rect")
              .attr("x", 100)
              .attr("y", 100)
              .attr("width", 200)
              .attr("height", 100)
              .attr("fill", "#9B95FF");
```
For Circle, we need to provide the co-ordinates of the center of the circle and its radius
  
```
var circle = svg.append("circle")
                .attr("cx", 200)
                .attr("cy", 300)
                .attr("r", 80)
                .attr("fill", "#7CE8D5");

```

NOTE:
If we want to use more complex operations, then we are going to deal with "Relative Position" and "Absolute Position".
So, lets say for example, when we want to move multiple SVG elements, it would be really tedious and difficult to move every single element individually.

So, we can use Groups. It can be represented as "g" in coding

```
<g transform="translate(100, 50)">...</g>
<g transform="translate(100, 0) rotate(20)">...</g>
```

Here we can specify "g" tag and group all the elements together.
"g" tag has an attribute called "transform" and it is used to transform all the elements inside the "g" tag.

> Transformation happen from RIGHT TO LEFT
> Rotation is applied before translation.


Let's start working with Canvas Example

```
HTML FILE: (Shots.html)

<!DOCTYPE html>

<html>      
      <head>
            <script src="https://ajax.googlepix.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            <script src="https://d3js.org/d3.v4.min.js"></script>
      </head>
      <body>
            <select id="selector"></select>
            <svg id="canvas" height="600px" height="1200px"></svg>
            <script src="static/shots.js"></script>
      </body>

</html>
```

```
JS FILE: (Shots.js)

d3.csv("static/shots.csv", function(data){
      
      console.log(data);
      
      var shots = d3.select("svg")
                    .selectAll("g") //Here we are selecting all the Groups.
                    .data(data) //For Each data point (ie, rows in the excel sheet), loop
                    .enter()
                    .append("g") // One group per row in our Dataset
                        .attr("class", "shot")  // Always use the CSS Classes. It is a best Practice in D3
                        .attr("transform", function(d){
                              return "translate(" + 10 * d.converted_y + "," + 10 * d.converted_x + ")";
                        })
                        
      shots.append("circle")
           .attr("r", 5)

}
```

"Converted_x" and "Converted_y" is used as the X and Y co-ordinates. Each and every data point is a Group or "g".
We are using the translate function to map each and every data point. 

"shots" variable represents all the "g" group datapoints and we are drawing a circle for each datapoint of radius 5px.


![image](https://user-images.githubusercontent.com/2145211/47959837-4cceb780-dfc4-11e8-9888-0635bc4e8af6.png)

And for this dataset, we are going to have a result as shown below:

![image](https://user-images.githubusercontent.com/2145211/47966969-0742d680-e026-11e8-9f6c-bc51e43373e0.png)

Now, lets make the circle green if the shots are successful, otherwise red.


```
      shots.append("circle")
           .attr("r", 5)
                 .attr("fill", function(d){  //We have an attribute "Fill" for circles.
                      if(d.result == "made"){
                        return "green";
                      } else {
                        return "red";
                      }
                 })

```
Now, we get something like this:

![image](https://user-images.githubusercontent.com/2145211/47967069-aae0b680-e027-11e8-9310-b23003d13857.png)


Now, can we make this visualization Interactive ? 

### 5) Interacting with DOM using D3

Now that we have a beautiful rendering of the datapoints from the excel spreadsheet, we can try to make this interactive.


```
      .on("some event", function(d){...})
```

The events can be a "click" or "move" or "keydown" or "mouseover" or "mouseout" etc. 
The second argument is the function which is called when the event is triggered.

```
.on("mouseover", function(d){
                        d3.select(this)
                          .append("text")
                          .attr("class", "playername") //Good Practice to add a CSS Class in D3
                          .text(d.player);
                    })
                    
```


d3.select(this) --> This represents the current DOM node 
Here we are appending a text to each datapoint. This is what happens when we don't destroy the text we created.

![image](https://user-images.githubusercontent.com/2145211/47967426-445d9780-e02b-11e8-81dc-da725afecfe0.png)

```
.on("mouseout", function(d){
      d3.selectAll("text.playername").remove(); 
})
```

This is one of the reasons why we use the CSS classes. (Ie, it is easy to remove whats being appended to the event).
This means that we dont need to go throught the loop to remove the text.

Now, as we can see from the example, we have now able to remove the text using the "mouseout" and we are using the CSS class to remove the DOM element

![image](https://user-images.githubusercontent.com/2145211/47967465-bc2bc200-e02b-11e8-9fa3-80e38e07cdcd.png)

Now, when we take a look at this example, we are seeing that the "Text" is added behind the datapoints. 
We don't want this to happen. So we can use "raise()" to fix this.

This is happening because, the "g" or group is already being placed before the others. 

![image](https://user-images.githubusercontent.com/2145211/47967554-715e7a00-e02c-11e8-9dc4-a27a023bc224.png)

```
      d3.select(this).raise()
```

Now, we can see that the names comes above all the circles.

![image](https://user-images.githubusercontent.com/2145211/47967576-bb476000-e02c-11e8-8684-1b3b4e2772dd.png)


### 6) Restructing Data using D3

Often we don't have the proper data to be visualized. Hence the data (most of the time) needs restructuring.
So, D3 provides additional functions to help us with this.

```
d3.nest()
d3.stratify()
d3.hierarchy()
```

> d3.stratify()

The canonical example for hierarchical data is a family tree.

![image](https://user-images.githubusercontent.com/2145211/47967674-fa29e580-e02d-11e8-8b04-d1798da663ae.png)

It is represented as table in CSV. 
A tree structure in D3 is popular. Now, we can use "stratify()" function to convert the tree structure into a JSON structure.

```
      var strat = d3.stratify()   //Here we are creating some stratifier
                    .id(function(d){  //Here the Id is going to be the name of the person
                        return d.name
                    })
                    .parentId(function(d){ //The parent Id is going to be the parent
                        return d.parent;
                    })
      strat(data);  //Now when we pass in the data to strat() function, then we would end up with the Javascript Object.            
```

We would end up with a Javascript Object with 3 keys
1. id
2. parentId
3. children

> d3.nest()

This is used to group together data.
In our case, we are going to group together data by Player. (Ie, all the shots taken by certain Players)

"d3.nest()" has 3 methods which we are going to use:

```
      .entries(data)
      .key(function(d) {...})
      .rollup(function(a) {...})
```

*.entries(data)*  Here we are going to specify the data we are going to nest.
*.entries(function(d){...})*  Key is used to specify what we want to group on.
*.rollup(function(d){...})* 


Lets take a look at an example

```
var players = d3.nest()
                .key(function(d){ return d.player; })
                .entries(data);
                
console.log(players);
```

When we run this code, we can see that the data is grouped by Players

![image](https://user-images.githubusercontent.com/2145211/47975862-c24a8e80-e07d-11e8-844f-4658d9831443.png)

The data is grouped by the Players and the values are the shots taken by the Players

![image](https://user-images.githubusercontent.com/2145211/47975893-e60dd480-e07d-11e8-8f79-d533b90f2c1e.png)


NOTE: This turns into a Key, Value Pair. 
Key --> Being the Key element (Ie, Player)
Value --> All other columns related to that Player.

Now, we have the object above where the shots are grouped by players.

> .rollup(function(a){...})

Once we have done our grouping, we can do some aggregation on top of the object.
Here this function acts on the whole array of rows, rather than acting on the rows individually.

So, to illustrate the rollup functionality, lets get the length of the array.

```
var players = d3.nest()
                .key(functions(d) { return d.player; })
                .rollup(function(v) { return v.length; })
                .entries(data);
                
console.log(players);
```

Now, if we run this again, we get the following:

![image](https://user-images.githubusercontent.com/2145211/47976331-e909c480-e07f-11e8-848b-c32934493544.png)

We can see that the values are aggregated. Here the rollup represents total # of shots taken by players.

Now that we have done some computation, lets add it to our visualization:

```
var selector = d3.select("#selector");

selector.selectAll("option")
        .data(players)
        .enter()
        .append("option")
        .text(function(d){ return d.key + ":" + d.value; })
        .attr("value", function(d) { return d.key(); })
```

The output is shown below. Now we have a dropdown of Players and shots taken as a dropdown values.

![image](https://user-images.githubusercontent.com/2145211/47976501-b44a3d00-e080-11e8-8ae0-763a19dfb24a.png)


Now, lets assume that we want to filter data by player selection from dropdown.
We use filter() function to accomplish this

```
var selector = d3.select("#selector");

selector.selectAll("option")
        .data(players)
        .enter()
        .append("option")
        .text(function(d){ return d.key + ":" + d.value; })
        .attr("value", function(d) { return d.key(); })

selector.on("change", function(){
        d3.selectAll(".shot") 
          .attr("opacity", 1.0); //Reset Opacity
        var value = selector.property("value");
        if(value != "ALL"){
            d3.selectAll(".shot")
              .filter(function(d){ return d.player != value; })
              .attr("opacity", 0.1);
         }
      })

```

![image](https://user-images.githubusercontent.com/2145211/47977394-c5e21380-e085-11e8-9958-5b928132e540.png)

We are also making sure that we add "ALL" value to the Dropdown value

```
      players.unshift({ "key" : ALL,
                        "value" : d3.sum(players, function(d) {return d.value;}) })
```
![image](https://user-images.githubusercontent.com/2145211/47977495-515ba480-e086-11e8-92cc-f57046799e07.png)


### 7) Additional Resources:

https://d3js.org

http://bl.ocks.org/mbostock

https://github.com/fivethirtyeight/d3-pre


### 8) Example: Creating a Simple Bar Chart using D3.JS

We have variables which defines the height and width of the container

```
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            
var barChart = svg.selectAll("rect")
                  .data(dataset)
                  .enter()
                  .append("rect")
                  .attr("y", function(d) {
                      return svgHeight - d
                  })
                  .attr("height", function(d) {
                      return d;
                  })
                  .attr("width", barWidth - barPadding)
                  .attr("transform", function(d, i) { 
                      var translate = [barWidth * i, 0];
                      return "translate(" + translate +")";
                  });

// We dont want all the bars in the bar chart to start from the same position. Hence we use the "Transform" [or] translate to describe where consecutive bars should start/

// Here im Translate array, we describe the translate for X Axis (barWidth * i) and Y Axis (0).
// Here i is the Index.

```

### 9) Creating Labels in D3

Here we are trying to add Labels to each of the Bar Chart

```
var text = svg.selectAll("text")
              .data(dataset)
              .enter()
              .append("text")
              .text(function(d){
                  return d;
              })
              .attr("y", function(d, i){
                  return svgHeight - d - 2;
              })
              .attr("x", function(d, i){
                  return barWidth * i;
              })
              .attr("fill", "#A64C38");
```

### 10) Scales in D3

Scales are functions which will transform our data, either by increasing or decreasing value for better visualizations.

Lets say our dataset = [1, 2, 3, 4, 5]
When we generate the barChart, it won't look good as the bars are barely visible

For this we are going to create a variable called "yScale" and we are going to call the function "d3.scaleLinear()"

```
var yScale = d3.scaleLinear()
               .domain([0, d3.max(dataset)])
               .range([0, svgHeight]);

```
### 11) Axes in D3
Axes are made of Lines, Text and hence they are very complex.
Thankfully D3 provides us with various functions to create these

```
1. d3.axisTop()
2. d3.axisRight()
3. d3.axisBottom()
4. d3.axisLeft()
```
