var APIKey = Meteor.settings.public.APIKey;

Meteor.methods({
  findLocations: function(lat, long, radius, keyword){
    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius="+ radius + "&keyword="+ keyword + "&opennow=true&key=" + APIKey;
    console.log(queryURL);

    var result = HTTP.get(queryURL, {});
    return result;
  },
  getDetails: function(placeid){
    var detailsURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeid + "&key=" + APIKey;
    console.log(detailsURL);
    var results = HTTP.get(detailsURL, {});
    console.log(results);
    return results;
  },
  saveLocation: function(placeId, details){
    Locations.insert({ 
      place_id: placeId,
      name: details.name,
      address: details.formatted_address,
      phone_number: details.formatted_phone_number,
      url: details.url,
      hours: details.opening_hours.weekday_text
    });
    //Locations.insert({ details: details });
    console.log('Added new location.');
  }
});