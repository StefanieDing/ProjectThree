Template.locations.events({
  //grabs more information on location user clicks on
  'click .locationDetail'(event){ 
    event.stopPropagation();
    event.preventDefault();
    var placeid = event.target.id;
    console.log(placeid);

    Meteor.call('getDetails', placeid, function(err, res){
        if(err){
          console.log(err);
        } else{
          Session.set("jsonDetail", res.data.result);
        }
      })

    setTimeout(function(){
       var detail = Session.get("jsonDetail");

      swal({
        title: detail.name,
        // text: detail.formatted_address,
        text: "<a href=" + detail.url + ">" + detail.formatted_address + "</a>" +
          "<p>" + detail.formatted_phone_number + "</p>" +
          "<br><strong>Opening Hours:</strong>" +
          "<ul>" +
            "<p>" + detail.opening_hours.weekday_text[0] + "</p>" +
            "<p>" + detail.opening_hours.weekday_text[1] + "</p>" +
            "<p>" + detail.opening_hours.weekday_text[2] + "</p>" +
            "<p>" + detail.opening_hours.weekday_text[3] + "</p>" +
            "<p>" + detail.opening_hours.weekday_text[4] + "</p>" +
            "<p>" + detail.opening_hours.weekday_text[5] + "</p>" +
            "<p>" + detail.opening_hours.weekday_text[6] + "</p>" +
          "</ul>",
        html: true,
        allowOutsideClick: true,
        confirmButtonColor: "#d32f2f"
      });
    },1000);

  },
  'click .favLocation'(event){
    event.stopPropagation();
    event.preventDefault();
    $(event.target).next("i").removeClass("hide");
    $(event.target).remove();
    swal({
      title: "Favorited!",
      allowOutsideClick: true,
      confirmButtonColor: "#d32f2f"
    });
    placeid= event.target.id;
    console.log(placeid);
  }
});


