var systemMap = d3.select('#vis')

var jsonNodes = [
   {"level": 1,
   	"order": 1,
	"label": "Landing Page"
   },
   {"level": 2,
   	"order": 1,
	"label": "New Releases"
   },
   {"level": 2,
   	"order": 2,
	"label": "My Library"
   },
   {"level": 2,
   	"order": 3,
	"label": "Social"
   },
   {"level": 2,
   	"order": 4,
	"label": "Settings"
   },
   {"level": 2,
   	"order": 5,
	"label": "Sign Out"
   },
   {"level": 3,
   	"order": 1,
	"label": "Music"
   },
   {"level": 3,
   	"order": 2,
	"label": "Podcasts and Shows"
   },
   {"level": 3,
   	"order": 3,
	"label": "My Music"
   },
   {"level": 3,
   	"order": 4,
	"label": "My Podcasts"
   },
   {"level": 3,
   	"order": 5,
	"label": "Friends' Library"
   },
   {"level": 3,
   	"order": 6,
	"label": "Account"
   },
   {"level": 4,
   	"order": 1,
	"label": "Genres"
   },
   {"level": 4,
   	"order": 2,
	"label": "Today's Hits"
   },
   {"level": 4,
   	"order": 3,
	"label": "Profile"
   },
   {"level": 4,
   	"order": 4,
	"label": "Subscription"
   }

];

var svgSelection = systemMap.append('svg')
	.attr('width', 600)
	.attr('height', 600);


/*d3.json("nodes.json", function(error, data){

	data.forEach(function(d){
		d.level = d.level;
		d.order = d.order;
		d.title = d.title;
	});

	
});*/


var nodes = svgSelection.selectAll("circle")
	.data(jsonNodes)
	.enter()
	.append("circle");

var nodeAttributes = nodes
	.attr("cx", (function (d) {return 300+25*(d.level);}))
	.attr("cy", (function (d) {return 150+25*(d.level+2*d.order);}))
	.attr("r", 50)
	.attr("class", "state-default")
	.append("text")
	.attr("dx", function(d){return 10})	
	.attr("fill", "red")
	.text(function(d){return d.label});






