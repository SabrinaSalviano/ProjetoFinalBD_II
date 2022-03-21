let map;
let marker;
let markers = [];
let comentarios = [];

let center = {lat: -6.888463202449027, lng: -38.558930105104125};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
  });

  marker = new google.maps.Marker({
      map: map,
      position: center,
      draggable: true
  });

  map.addListener("click", (evt) => {
    addMarker(evt);
  });

  marker.addListener('position_changed', ()=>{
      map.setCenter(marker.position);
  });

}
function addMarker(evt){
    marker.setPosition(evt.latLng);
}

function salvar(){

    const obj = {
        comentario: document.getElementById('comentario').value,
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
    };

    fetch("http://localhost:3001/ponto",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(response =>{alert('Inserido!')})
    .catch(error => alert('Falha ao salvar!'));    

}

function VerPonto() { 
  fetch('http://localhost:3001/getPonto')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var x = 0;
      data.forEach(function() {
        markers[x] = new google.maps.Marker({
          position: new google.maps.LatLng(TransformLatLng(data[x]['localizacao'])[0], TransformLatLng(data[x]['localizacao'])[1]),
          map: map,
          draggable: false
        });

        comentarios[x] = data[x]['comentario']; 
        
        let test = comentarios[x];

        markers[x].addListener('click', () => {
          alert(test);
        });
      x = x + 1;
      })
    })
}

function TransformLatLng(point) {
  let latLng = point.replace("POINT(", "").replace(")", "").replace(" ", "/");
  var result = latLng.split("/")
  let points = [parseFloat(result[0]), parseFloat(result[1])];
  return points
}