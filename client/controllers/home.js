function findLocations(radius, keyword){
    var lat = Session.get("lat");
    var long = Session.get("long");
    var APIKey = Meteor.settings.public.APIKey;

    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius="+ radius + "&keyword="+ keyword + "&opennow=true&key=" + APIKey;
    console.log(APIKey);
    console.log(queryURL);
    // $.ajax({url: queryURL, method: 'GET'}).done(function(res) {
    // var results = res.data;

    // console.log(queryURL);
    // console.log(res);
    // });
    HTTP.get( queryURL, {}, function( err, res ) {
      if ( err ) {
        console.log( err );
      } else {
        console.log( res );
      }
    });
}

Template.home.events({
  'submit .form'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var target = event.target;
    var keyword = target.keyword.value;
    var radius = target.radius.value;
    
    //runs the helper to grab all the locaton results
    // findLocations(radius, keyword);
    Meteor.call('findLocations', Session.get("lat"), Session.get("long"), radius, keyword)
    //searches by zipcode only
    // findzipcode(location)
 
    // Clear form
    target.keyword.value = '';
    target.radius.value = '';
    target.location.value = '';
  },
});

Template.home.helpers({
  
  // 'locationZipcoderesults': function findzipcode(location){
  //   var APIKey = Meteor.settings.APIKey;
  //   var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + zipcode + "&key="+ APIKey;

  //   $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
  //   var results = response.data;
  //   //Stores latitude & longitude of zipcode
  //   var lats=response.results[0].geometry.location.lat
  //   var longs=response.results[0].geometry.location.lng
  //   console.log(queryURL);
  //   console.log(response);
  //   Session.set({
  //     'lat': lats,
  //     'long':longs
  //   })
  //   // locationResults.function()
  // })
  // };

});


