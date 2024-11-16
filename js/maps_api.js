'use strict';

function initMap() {
    const center = new google.maps.LatLng(40.672462, -73.896829);
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "62f1b24625ba0836",
        zoom: 12,
        center: center,
        
    });

    const imgMarker = './assets/img/svg/pin.svg';
    new google.maps.Marker({
        position: center,
        icon: imgMarker,
        map: map,
        opacity: 0.7,
        width: '12px'
    });
}

window.initMap = initMap;


