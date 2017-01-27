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
  // setTimeout(function(){
  //   $('.collapsible').collapsible();
  // }, 1000)
});

Template.profile.helpers({
  thereAreSavedLocations() {
    var myLocations = Locations.find({place_id}).fetch();
    if(myLocations.length === 0){
      return false;
    } else{
      return true;
    }
  },
});
