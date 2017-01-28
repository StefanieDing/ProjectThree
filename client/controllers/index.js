Template.index.events({

  'submit .formSearch'(event) {
    // Prevent default browser form submit
    event.preventDefault();
     $('.submitCss').addClass('clicked')
       setTimeout(function(){
      $(".clicked").removeClass("clicked")
      },1500);
    $('.mainSearch').animate({top: '0px'});
    $('.resultsContainer-desktopMain').removeClass('donotShow').addClass('slideUp');
    $('.mainLogoIndex').css("display", "none");

    var target = event.target;
    var keyword = target.keyword.value;
    var radius = target.radius.value || '10000';
    var zipcode = target.zipcode.value || '08861';

    //grab lat and long if user enters zipcode
    if(zipcode){
      findzipcode(zipcode);
    }

    //runs the method to grab all the locaton results
    Meteor.call('findLocations', Session.get("lat"), Session.get("long"), radius, keyword, function(err, res){
      if(err){
        console.log(err);
      } else{
        console.log('Success!');
        //sets jsonBody with the return
        Session.set("jsonBody", res.data.results);
        console.log(res.data.results);
      }
    })

    // Clear form
    target.keyword.value = '';
    target.radius.value = '';
    target.zipcode.value = '';
  }
});



Template.index.helpers({
  thereAreLocations() {
    if((Session.get("jsonBody")).length === 0){
      return false;
    } else{
      return true;
    }
  },
  thereIsEmail() {
   if((Session.get("chatWindow")) === true){
    console.log("true");
    return true;
   } else{
    return false;
   }
 }
});

//set as global helper to use in home and locations template
Template.registerHelper( 'foundLocations', () => {
  if((Session.get("jsonBody")).length === 0){
      return "No locations found!"
    } else{
      return Session.get("jsonBody");
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


Template.chat.helpers({
  thereIsEmail() {
   if((Session.get("chatWindow")) === true){
    console.log("true");
    return true;
   } else{
    return false;
   }
 }




//  Template.index.onRendered(function(){
//
//    $('.dropdown-button').dropdown({
//      inDuration: 300,
//      outDuration: 225,
//      constrainWidth: false, // Does not change width of dropdown to that of the activator
//      hover: true, // Activate on hover
//      gutter: 0, // Spacing from edge
//      belowOrigin: false, // Displays dropdown below the button
//      alignment: 'left', // Displays dropdown with edge aligned to the left of button
//      stopPropagation: false // Stops event propagation
//    }
//  );
//
// )}


});
