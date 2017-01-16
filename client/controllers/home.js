Template.home.events({
  'submit .form'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var keyword = event.target.keyword.value;
    var radius = event.target.radius.value;
    
    //runs the helper to grab all the locaton results
    findLocations(radius, keyword);
 
    // Clear form
    target.keyword.value = '';
    target.radius.value = '';
  },
});

Template.home.helpers({
  'locationResults': function findLocations(radius, keyword){
    var lat = Session.get("lat");
    var long = Session.get("long");
    var APIKey = Meteor.settings.APIKey;
    var queryURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius="+ radius + "&keyword="+ keyword + "&opennow=true&key=" + APIKey;

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    var results = response.data;

    console.log(queryURL);
    console.log(response);
  });
  }
});
