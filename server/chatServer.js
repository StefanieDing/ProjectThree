import { Meteor } from 'meteor/meteor';

Meteor.methods({
  sendMessage: function (message) {
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }

    Messages.insert({
      messageText: message,
      createdAt: new Date(),
      username: "Anonymous"  // <-adds real username
    });
  }
});