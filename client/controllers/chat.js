var autoScrollingIsActive = false;
// reactive var
thereAreUnreadMessages = new ReactiveVar(false);
var recipientEmail;

scrollToBottom = function (duration) {
  var messageWindow = $(".message-window");
  var scrollHeight = messageWindow.prop("scrollHeight");
  messageWindow.stop().animate({scrollTop: scrollHeight}, duration || 0);
};

// subscribing to messages publication
Meteor.subscribe("messages", {
  onReady: function () {
      scrollToBottom();
      autoScrollingIsActive = true;
  }
});

// subscribing to findRecipients publication
Meteor.subscribe('findRecipients');

  // helpers
  Template.chat.helpers({
    recentMessages: function () {
      return Messages.find({}, {sort: {createdAt: 1}});
    },
    /* unread message helper */
    thereAreUnreadMessages: function () {
      return thereAreUnreadMessages.get();
    }, 
    // returning chat recipients
    Recipient1: function(){
      return this.recipients[0];
    },
    Recipient2: function(){
      return this.recipients[1];
    }
  })


  /*chat window scrolling*/
  Template.message.onRendered(function () {
    if (autoScrollingIsActive) {
      scrollToBottom(250);
    } else {
      if (Meteor.user() && this.data.username !== Meteor.user().username) {
        thereAreUnreadMessages.set(true);
      }
    }
  });

  // Event to grab recipient Email
  Template.ListUsers.events({
  'click li': function(event){
    recipientEmail = $(event.target).closest('a').html();
    // console.log(recipientEmail);


    if (recipientEmail) {
      Session.set("chatWindow", true);
    } else {
      Session.set("chatWindow", false)
    }
  }
});

  /*events*/
  Template.chat.events({
    "submit .new-message": function(event) {
      var messageText = event.target.text.value;

      Meteor.call("sendMessage", messageText, recipientEmail);

      // console.log(recipientEmail);

      scrollToBottom(250);

      event.target.text.value = "";
      event.preventDefault();
    },

    /* scroll event */
    "scroll .message-window": function () {
      var howClose = 80;  // # pixels leeway to be considered "at Bottom"
      var messageWindow = $(".message-window");
      var scrollHeight = messageWindow.prop("scrollHeight");
      var scrollBottom = messageWindow.prop("scrollTop") + messageWindow.height();
      var atBottom = scrollBottom > (scrollHeight - howClose);
      autoScrollingIsActive = atBottom ? true : false;
      if (atBottom) {        
        thereAreUnreadMessages.set(false);
      }
    },

    "click .more-messages": function () {
      scrollToBottom(500);
      thereAreUnreadMessages.set(false);
    }

  });
  
  /*account config*/ 
   // Keep this if you want it to ask for username instead of email
  // Accounts.ui.config({
  //   passwordSignupFields: "USERNAME_ONLY"
  // });
