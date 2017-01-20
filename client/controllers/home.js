Template.home.events({
  'submit .form'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var target = event.target;
    var keyword = target.keyword.value;
    var radius = target.radius.value;
    // var zipcode = target.radiys.value;

    //  if(zipcode){
    //   findzipcode(zipcode);
    // }
    
    
    //runs the helper to grab all the locaton results
    // findLocations(radius, keyword);
    console.log('Sending form for.. ' + Session.get("lat") + "," + Session.get("long"));
    Meteor.call('findLocations', Session.get("lat"), Session.get("long"), radius, keyword, displayJson())
   
    //searches by zipcode only
    // findzipcode(location)
 
    // Clear form
    target.keyword.value = '';
    target.radius.value = '';
    target.location.value = '';


  },
});

//json from server to client
function displayJson() {
    Meteor.call('findLocations', function(err, jsonBody){
      if ( err ) {
        console.log( err )
      } else {
    Session.set('jsonResults',jsonBody)
    var displaySession = Session.get('jsonResults')
    console.log(displaySession)
  }
  }
  )}

  

// Template.home.created = function() {
//   Meteor.call('findLocations', function(err, jsonBody){
//     console.log(jsonBody)
//     Session.set('jsonBody',jsonBody)
//     var displaySession = session.set('jsonBody', jsonBody)
//   })
// }


//display results to page
Template.home.helpers({

  returnJson: function() {
    return Session.get('jsonBody')

    }

});

//if user enters zipcode instead of turning on location
function findzipcode(zipcode){
  var APIKey = Meteor.settings.public.APIKey;
  var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + zipcode + "&key="+ APIKey;

  $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
  var results = response.data;
  //Stores latitude & longitude of zipcode
  var lats=response.results[0].geometry.location.lat
  var longs=response.results[0].geometry.location.lng
  console.log(queryURL);
  console.log(lats + "," + longs);
  Session.set('lat', lats);
  Session.set('long', longs);
  })
};


