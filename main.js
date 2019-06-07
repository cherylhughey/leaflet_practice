var mymap = L.map('mapid').setView([38.546648, -90.539688], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hlcnlsaHVnaGV5IiwiYSI6ImNqd2p3ZzM5ZTBnNmY0NXBjeXpzb3o5Y3EifQ.XG1GzUd1hUeWO6MzqHMRhw'
}).addTo(mymap);

L.circleMarker(<38.5470003, -90.5470048> ,<radius: 10> );

L.marker([38.5470003, -90.5470048]).addTo(mymap)
        .bindPopup('Lone Wolf Trail.<br> Awesome view!.')
		.openPopup();

