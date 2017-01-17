function findLocations(radius, keyword){
    var lat = Session.get("lat");
    var long = Session.get("long");
    var APIKey = Meteor.settings.APIKey;
    var queryURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius="+ radius + "&keyword="+ keyword + "&opennow=true&key=" + APIKey;
    console.log(APIKey);

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    var results = response.data;
    // return results;
    console.log(queryURL);
    console.log(response);
    console.log()
    });
}

//If user searches zipcode only.Currently saves lat/long of zipcode.
function findzipcode(location) {
    var APIKey = Meteor.settings.APIKey;
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + location + "&key=AIzaSyAZsRAVEPtigI7SzB_QnCuY92bdh0OpefY";

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    var results = response.data;
    //Stores latitude & longitude of zipcode
    var lats=response.results[0].geometry.location.lat
    var longs=response.results[0].geometry.location.lng
    console.log(queryURL);
    console.log(response);
    Session.set('lat', lats);
    Session.set('long', longs);
    var latitudes = Session.get('lat', lats);
    var longitudes = Session.get('long', longs);
    console.log(latitudes+","+longitudes)

  });
};



Template.home.events({
  'submit .form'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const keyword = target.keyword.value;
    const radius = target.radius.value;
    const location = target.location.value;
    
    //runs the helper to grab all the locaton results
    findLocations(radius, keyword);
    findzipcode(location)

    //searches by zipcode only
    // findzipcode(location)
 
    // Clear form
    target.keyword.value = '';
    target.radius.value = '';
    target.location.value = '';
  },
});

Template.home.helpers({
  


});


