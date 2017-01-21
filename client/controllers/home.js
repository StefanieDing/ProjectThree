Template.home.events({
  'submit .form'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var target = event.target;
    var keyword = target.keyword.value;
    var radius = target.radius.value;
    var zipcode = target.zipcode.value;

    //grab lat and long if user enters zipcode
    if(zipcode){
      findzipcode(zipcode);
    }

    setTimeout(function(){
      //runs the helper to grab all the locaton results
      Meteor.call('findLocations', Session.get("lat"), Session.get("long"), radius, keyword, function(err, res){
        if(err){
          console.log(err);
        } else{
          console.log('Success!');
          //allow time to hit API
          setTimeout(function(){
            Session.set("jsonBody", res);
            console.log(res);
          }, 3000);
    
        }
      })
    },3000);
 
    // Clear form
    target.keyword.value = '';
    target.radius.value = '';
    target.zipcode.value = '';
  },
});

Template.location.helpers({
  // foundLocation: [
  //     {results: [
  //           {
  //               "name": "1225 Raw Sushi and Sake Lounge",
  //               "rating": 4.1,
  //               "vicinity": "1225 Sansom Street, Philadelphia",
  //           }]
  // }],
  foundLocation: function() {
    if(Session.get("jsonBody")){
      return Session.get("jsonBody");
    }
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