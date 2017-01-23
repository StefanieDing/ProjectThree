Template.masterLayout.rendered = function () {
  $(".button-collapse").sideNav();
};

Tracker.autorun(function() {
  if(Meteor.user()){
    $('body').addClass('pad-body');
  } else {
    $('body').removeClass('pad-body');
  }
}); 