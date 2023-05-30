window.addEventListener('load', onVrViewLoad);

// Les imatges han de tenir una ratio de 2:1

var baseNameString = "pano_";
var currentPanorama = 0;

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: './img/borram.jpg',
    is_stereo: false
  });
}

