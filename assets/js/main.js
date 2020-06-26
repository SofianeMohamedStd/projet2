function init(){
    
    const o = {lat: 47.752045, lng: 7.316796};
    const zoomLevel = 20;

    const map = L.map('mapp').setView([o.lat, o.lng], zoomLevel);

    const mainLayer= L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic29maWFuZW4iLCJhIjoiY2tidHF2MGVuMGNqMjJ6bGNtbjJydzc3YSJ9._vwvrngqV0ioWkXni3XQIw'
    
    });
    const a=document.getElementById("overly").style.display = "block";

    mainLayer.addTo(map,overly);
}


