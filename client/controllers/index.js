Template.index.events({

  'click .signIn-Desktop': function(){
         $('.rightMainContainer').toggle();

   },
   'click .closeContainer': function(){
          $('.rightMainContainer').toggle();

    },
  //
  //  'click .signUp-Desktop': function(){
  //         $('.rightMainContainer-signUp').toggle();
  //   },

    // 'click .mainSearch-Button': function(){
    //   $('.wrapperNav-MainPage').toggle();
    //   $('.scale-out').toggleClass("scale-in");
    //
    //  }
      "submit #signIn-fromMain": function(event, template) {
        event.preventDefault();
        Meteor.loginWithPassword(
          template.find(".usernameMain").value,
          template.find(".passwordMain").value,
          function(error) {
            if (error) {
              // Display the login error to the user however you want
            }
          }
        );
      }




});
