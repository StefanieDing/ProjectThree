Template.navbar.helpers({
  // check if user is an admin
  'isAdminUser': function() {
    return Roles.userIsInRole(Meteor.user(), ['admin']);
  }
});

Template.navbar.onRendered(function(){
   $('.collapsible').collapsible();
});