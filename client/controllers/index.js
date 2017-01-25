Template.index.events({
  'a .mainSearch-Button'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    $('rightMainContainer').toggle();

  },
});
