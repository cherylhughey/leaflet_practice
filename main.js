var mymap = L.map('mapid').setView([38.546648, -90.539688], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hlcnlsaHVnaGV5IiwiYSI6ImNqd2p3ZzM5ZTBnNmY0NXBjeXpzb3o5Y3EifQ.XG1GzUd1hUeWO6MzqHMRhw'
}).addTo(mymap);

var circle = L.circle([38.54971, -90.54021], {
    color: 'green',
    fillColor: 'ade6ae',
    fillOpacity: 0.15,
    radius: 430
}).addTo(mymap);

L.marker([38.54971, -90.54021]).addTo(mymap)
        .bindPopup('Lone Wolf Trail.<br>Park & hike here.')
		.openPopup();

L.marker([38.54986, -90.53957]).addTo(mymap)
        .bindPopup('Riverscene Trail.<br> Start here.')
		.openPopup();

    L.marker([38.53805, -90.55936]).addTo(mymap)
            .bindPopup('Castlewood Loop Trail.<br> Trailhead Spur.')
    		.openPopup();

/* LeafletJS License on GitHub: https://github.com/Leaflet/Leaflet/blob/master/LICENSE
Longitude, latitude and info found at https://dnr.mo.gov/trails/fullMap.action?xmin=-10088812.28&ymin=4653925.52&xmax=-10077050.53&ymax=4660155.14 */
