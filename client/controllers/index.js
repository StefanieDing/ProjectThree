Template.index.events({
  'a .mainSearch-Button'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const keyword = target.keyword.value;
    const radius = target.radius.value;

    //runs the helper to grab all the locaton results

    //searches by zipcode only
    // findzipcode(location)

    // Clear form
    target.keyword.value = '';
    target.radius.value = '';
    target.location.value = '';
  },
});
