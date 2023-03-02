let map = L.map('map').setView([0, 0], 4);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize: [50, 50]
});

let marker = L.marker([0,0], {icon: myIcon}).addTo(map);

window.onload = function() {
    Particles.init({
        selector: '.background'
    });
};


setInterval(
    () => {
        $.ajax({
                url: "http://api.open-notify.org/iss-now.json",
                method: "GET",
            }
        ).done(
            (donnees) => {
                let lati = donnees.iss_position.latitude;
                let longi = donnees.iss_position.longitude;
                $("#lat").text(lati);
                $("#long").text(longi);
                map.setView([lati, longi]);
                marker.setLatLng([lati, longi]);
            });
    }, 500
)








