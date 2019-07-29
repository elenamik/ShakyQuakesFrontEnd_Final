import React, { useEffect } from 'react'

function Map(props){

    useEffect(()=>{
        renderMap()
    })

    function getInfoWindow(data_point){
      console.log("in info window:",data_point)
      return(
        `
        <div style="text-align:center">
          <div style="font-weight:bold">Earthquake Metrics:</div>
          <div style="">Magnitude: ${data_point.magnitude}N-m</div>
          <div style="">Epicenter distance: ${data_point.center}km</div>
          <div style="">Radon Level: ${data_point.radon_level}kbqm3</div>
        </div>
        `
      )
    }
  function renderMap () {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCtAjI6gMXTZoIoapgF5eWVyFIj1ctMeNg&callback=initMap")
    window.initMap = initMap
  }

  function initMap (){

    // Create A Map
    const data=props.data;

    console.log("data in map",data)
    var map = new window.google.maps.Map(document.getElementById('map2'), {
        center: {lat:44.3,lng:17.78},
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
          console.log(lat,lng)
          const contentString=getInfoWindow(data_point);
          var infowindow = new window.google.maps.InfoWindow({
            content: contentString
          });
          const myLatLng=new window.google.maps.LatLng(lat,lng)
          var marker = new window.google.maps.Marker({
              position: myLatLng,
              map: map,
          })
          infowindow.open(map,marker)
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          markers.push(marker)
          bounds.extend(myLatLng)
        })
        console.log("MARKERS",markers)
        //map.fitBounds(bounds)
      }
    }
    return (
      <main>
        <div id="map2"></div>
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
