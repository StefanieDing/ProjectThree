import { Meteor } from 'meteor/meteor';

// var date = new Date();
// var now = moment(date).format("hh:mm a");

Meteor.methods({
  sendMessage: function (message, recipientEmail) {
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }

    Messages.insert({
      messageText: message,
      createdAt: new Date(),
      username: Meteor.user().emails[0].address,  // grabs user email address
      recipients: [recipientEmail, Meteor.user().emails[0].address]  //stores the recipient in the message from client side
    });
  }
});