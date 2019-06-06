var mymap = L.map('mapid').setView([38.42189, -90.4647247], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hlcnlsaHVnaGV5IiwiYSI6mNqd2p1Nm1meTAxd2s0MHBidWQwODZ0ZTEifQ.Dj3w9VPOJHHXz-3VM4jLvA'
}).addTo(mymap);

L.marker([38.42189, -90.4647247]).addTo(map)
		.bindPopup('St. Louis County Library.<br> Fenton, MO.')
		.openPopup();
