
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.997036, -71.338926],
    zoom: 17,
    zoomControl: true
});


				
/*var	mapab_26_07 = L.geoJson(mapab_26_07, {	
              	    style: function(feature) {
        switch (feature.properties.tipo) {
            case 'tv': return {color: "green"};
            case 'fono':   return {color: "blue"};
			case 'inet':   return {color: "red"};
			case 'd':   return {color: "orange"};
		    case 'e':   return {color: "brown"};
			case 'g':   return {color: "purple"};
        }
    }

    	
                  
              }).addTo(map);*/
			  
			  
			  
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.tipo) {
        layer.bindPopup(feature.properties.tipo);
    }
}











/*L.geoJSON(mapab_26_07, {
    onEachFeature: onEachFeature
}).addTo(map);*/

			  

		  
			  
L.geoJSON(mapab_26_07, {
	onEachFeature: onEachFeature,
    style: function(feature) {
        switch (feature.properties.tipo) {
            case 'tv': return {color: "#ff0000"};
            case 'inet':   return {color: "#0000ff"};
        }
    }
}).addTo(map);
		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
