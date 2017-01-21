
Meteor.methods({
  findLocations: function(lat, long, radius, keyword){
    var APIKey = Meteor.settings.public.APIKey;

    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius="+ radius + "&keyword="+ keyword + "&opennow=true&key=" + APIKey;
    console.log(queryURL);

    var result = HTTP.get(queryURL, {});
    return result;
  }
});