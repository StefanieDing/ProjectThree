Template.masterLayout.rendered = function () {
  $(".button-collapse").sideNav();
  getLocation();
};

Template.masterLayout.events({
  
})

//initialize the user location, user can allow or block when prompted
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(recordPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//records lat and long of user location
function recordPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
    Session.set({
      'lat': latitude,
      'long': longitude
    });
    console.log(latitude + "," + longitude);
}