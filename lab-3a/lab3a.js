"use strict";
var map;
var coolLocation = [];
var mapMarkers = [];
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    return MapMarker;
}());
var Toronto = { lat: 43.6532, lng: -79.3832 };
var initMapConfig = { center: Toronto, zoom: 8 };
$.ajax({
    url: './locations.json',
    dataType: 'json',
    success: function (data) {
        //data is an array of objects in this context
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            coolLocation.push(cl);
        }
    }
});
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), initMapConfig);
    for (var _i = 0, coolLocation_1 = coolLocation; _i < coolLocation_1.length; _i++) {
        var cl = coolLocation_1[_i];
        var newMapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);
    }
    var markersIndex = 0;
    setLatitudeLongitude();
    function setLatitudeLongitude() {
        mapMarkers[markersIndex].Coordinates = getLatLng(mapMarkers[markersIndex].Address);
        console.log(mapMarkers[markersIndex]);
        markersIndex++;
    }
    function getLatLng(address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (result, status) {
            if (status == 'OK') {
                console.log(result[0].geometry.location.lat());
                console.log(result[0].geometry.location.lng());
                return { lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng() };
            }
            else {
                setInterval(getLatLng(address), 1000);
            }
        });
    }
    function addMarker(coord) {
        var newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: "A cool place to be"
        });
    }
}
