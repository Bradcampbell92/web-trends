let map : any;
let coolLocation : any[] = [];
let mapMarkers : MapMarker[] = [];

interface LatLng
{
    lat: number,
    lng: number
}
class MapMarker
{
    Address : string;
    Coordinates: LatLng;

    public constructor(address : string)
    {
        this.Address = address;
    }
}
let Toronto : LatLng = { lat: 43.6532, lng: -79.3832 }
let initMapConfig = { center: Toronto, zoom: 8}

$.ajax({
    url: './locations.json',
    dataType: 'json',
    success: function(data)
    {
        //data is an array of objects in this context
        for(let cl of data)
        {
            coolLocation.push(cl);
        }
    }
});


function initMap()
{
    map = new google.maps.Map(
        document.getElementById("map"), initMapConfig
    );

    for(let cl of coolLocation)
    {
        let newMapMarker : MapMarker = new MapMarker(cl.address);

        mapMarkers.push(newMapMarker);
    }

    let markersIndex : number = 0;
    setLatitudeLongitude();

    function setLatitudeLongitude() : void
    {
        mapMarkers[markersIndex].Coordinates = getLatLng(mapMarkers[markersIndex].Address);

        console.log(mapMarkers[markersIndex]);

        markersIndex++;
    }


    function getLatLng(address : string) : LatLng
    {
        let geocoder : object = new google.maps.Geocoder();

        geocoder.geocode({ 'address' : address }, function(result, status){
            if(status == 'OK')
            {
                console.log(result[0].geometry.location.lat());
                console.log(result[0].geometry.location.lng());

                return {lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng()};
            }
            else
            {
                setInterval( getLatLng(address), 1000);
            }
        });
    }
    function addMarker(coord: LatLng) : void
    {
        let newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: `A cool place to be`
        });

    }

}