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

var myLocations = Locations.find().fetch();

Template.profile.helpers({
  thereAreSavedLocations() {
    if(myLocations.length != 0){
      return true;
    } else{
      return false;
    }
  },
});

Template.registerHelper( 'savedLoc', () => {
  if(myLocations.length === 0){
    return "There are no saved locations.";
  } else{
    return Locations.find({});
  }
});
