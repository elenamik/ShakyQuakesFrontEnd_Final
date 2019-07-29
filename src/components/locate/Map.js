import React, { useEffect } from 'react'
import URL from '../../static/env';

const imageURL=`${URL}/found/`

function Map(props){
    useEffect(()=>{
        renderMap()
    })

    function getInfoWindow(data_point){
      const ts=data_point.timestamp.split(" ")
      const date=ts[0];
      const year=date.slice(0,4);
      const month=date.slice(5,7);
      const day=date.slice(8,10)
      const time=ts[1].slice(0,8);


      return(
        `
        <div style="text-align:center">
          <div style="font-weight:bold">Person Detected!</div>
          <div><span style="font-weight:bold">Time:</span> ${time}</div>
          <div><span style="font-weight:bold">Date:</span> ${month}-${day}-${year}</div>
          <img src=${imageURL}${data_point.photo}></img>
        </div>
        `
      )
    }

  function renderMap () {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCtAjI6gMXTZoIoapgF5eWVyFIj1ctMeNg&callback=initMap")
    loadScript("https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js")
    window.initMap = initMap
  }

  function initMap (){
    // Create A Map
    const data=props.data;
    console.log(data)
    var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat:-34,lng:150},
        zoom:8
    })
    console.log("MAKING MAP",data)
     if(data[0]){
        var bounds = new window.google.maps.LatLngBounds();
        
        // Create Markers
        let markers = [];
        data.map((data_point)=>{
          const position=data_point.location;
          const lat=Number(position.lat);
          const lng=Number(position.lng);
          const contentString=getInfoWindow(data_point);
          var infowindow = new window.google.maps.InfoWindow({
            content: contentString
          });
          const myLatLng=new window.google.maps.LatLng(lat,lng)
          var marker = new window.google.maps.Marker({
              position: myLatLng,
              map: map,
          })
          console.log(marker)
          console.log(data_point.photo)
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          markers.push(marker)
          bounds.extend(myLatLng)
        })
        map.fitBounds(bounds)
        var markerCluster = new window.MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
  }
    return (
      <main>
        <div id="map"></div>
      </main>
    )
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default Map;
