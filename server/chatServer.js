import { Meteor } from 'meteor/meteor';

Meteor.methods({
  sendMessage: function (message) {
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }

    Messages.insert({
      messageText: message,
      createdAt: new Date(),
      username: Meteor.user().emails[0].address  // grabs user email address
    });
  }
});