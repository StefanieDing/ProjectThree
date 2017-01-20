Meteor.methods({

  findLocations: function(lat, long, radius, keyword){
    var APIKey = Meteor.settings.public.APIKey;

    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius="+ radius + "&keyword="+ keyword + "&opennow=true&key=" + APIKey;
    console.log(APIKey);
    console.log(queryURL);
    
    HTTP.get( queryURL, {}, function( err, result ) {
      if ( err ) {
        console.log( err );
      } else {
        var jsonBody = result
        console.log(jsonBody)
        return jsonBody
        }
    });

}
   
})
