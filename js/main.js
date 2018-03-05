var systemMap = d3.select('#vis')

var perLevel = [1, 5, 6, 4]

var svgSelection = systemMap.append('svg')
	.attr('width', 400)
	.attr('height', 400);

var nodes = svgSelection.selectAll("circle")
	.data(perLevel)
	.enter()
	.append("circle")

var nodeAttributes = nodes
	.attr("cx", (function (d) {return 25*d+1;}))
	.attr("cy", (function (d) {return 25*d+1;}))
	.attr("r", 25)
	.attr("class", "state-default");


