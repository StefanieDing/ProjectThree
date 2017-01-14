//grabs users current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

Template.masterLayout.rendered = function () {
  $(".button-collapse").sideNav();
  getLocation();
};

Template.masterLayout.events({
  'click main': function(){
    alert('HI!');
  }
})