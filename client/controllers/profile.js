Meteor.subscribe('locations');

Template.profile.onRendered(function(){
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });

  $('.personTag-mobile').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
});

Template.profile.helpers({
  thereAreSavedLocations() {
    var myLocations = Locations.find().fetch();
    if(myLocations.length != 0){
      return true;
    } else{
      return false;
    }
  },
});

Template.registerHelper( 'savedLoc', () => {
  var myLocations = Locations.find().fetch();
  if(myLocations.length === 0){
    return "There are no saved locations.";
  } else{
    return Locations.find({});
  }
});