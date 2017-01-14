  //storage for latitude and longitude when seareching by zipcode
  var lat=0;
  var long=0;
  var APIKey = "AIzaSyDo0bJO1pVojjDWQaEkR-7VRIWdWxiUysE";

//initialize the user location, user can allow or block when prompted
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//records lat and long of user location
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    lat = position.coords.latitude;
    long = position.coords.longitude;
    var queryUrl = currentlocation(lat, long);
    console.log(queryUrl);
    getPlaces(queryUrl);
    console.log(lat + "," + long);
}

function currentlocation(lat, long) {
    var radius = '1000';
    var keyword = 'pizza';
    var queryURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius="+ radius + "&keyword="+ keyword + "&opennow=true&key=" + APIKey;

  return queryURL;
}

//returns list of places from query
function getPlaces (queryURL) {
    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    var results = response.data;

    console.log(queryURL);
    console.log(response);
  });
}  

//calls the function to start current userlocation
getLocation();