Meteor.methods({
  findLocations: function(lat, long, radius, keyword){
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
});