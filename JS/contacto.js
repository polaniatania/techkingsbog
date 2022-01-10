$(document).ready(function () {
  $("form").submit(function (event) {
    $("#datos-recibidos")
      .removeClass("ocultar")
      .fadeIn(2000)
      .delay(3000)
      .fadeOut("slow", function () {
        $("#datos-recibidos").addClass("ocultar");
        $("form").trigger("reset");
      });
    event.preventDefault();
  });
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 4.6641687, lng: -74.060889 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
