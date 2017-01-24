Template.locations.events({
  //grabs more information on location user clicks on
  'click .locationDetail'(event){ 
    var placeid = event.target.id;
    console.log(placeid);

    Meteor.call('getDetails', placeid, function(err, res){
        if(err){
          console.log(err);
        } else{
          console.log(res.data.result);
          Session.set("jsonDetail", res.data.result);
        }
      })

    //pop-up modal that displays all the details
    MaterializeModal.message
      title: 'Location'
      message: 'Some Details.'
  }
});

// Template.locationModal.helpers({
//   details(){
//     return Session.get("jsonDetail");
//   }
// });
