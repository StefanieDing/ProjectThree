Template.saved.events({
  'click .favoritedDetails'(events){
    event.stopPropagation();
    event.preventDefault();

    var placeid = events.target.id;
    var detail = Locations.find({ place_id: placeid }).fetch()[0];
    console.log(detail);
    swal({
        title: detail.name,
        // text: detail.formatted_address,
        text: "<a href=" + detail.url + ">" + detail.address + "</a>" +
          "<p>" + detail.phone_number + "</p>" +
          "<br><strong>Opening Hours:</strong>" +
          "<ul>" +
            "<p>" + detail.hours[0] + "</p>" +
            "<p>" + detail.hours[1] + "</p>" +
            "<p>" + detail.hours[2] + "</p>" +
            "<p>" + detail.hours[3] + "</p>" +
            "<p>" + detail.hours[4] + "</p>" +
            "<p>" + detail.hours[5] + "</p>" +
            "<p>" + detail.hours[6] + "</p>" +
          "</ul>",
        html: true,
        allowOutsideClick: true,
        confirmButtonColor: "#d32f2f"
      });
  },
});