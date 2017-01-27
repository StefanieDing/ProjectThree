import { Meteor } from 'meteor/meteor';
import { BrowserPolicy } from 'meteor/browser-policy-common';
import { HTTP } from 'meteor/http'

Meteor.startup(() => {
  BrowserPolicy.content.allowOriginForAll('*');
  // code to run on server at startup

  // create admin from settings
  if (Meteor.users.findOne(Meteor.settings.adminId)){
    Roles.addUsersToRoles(Meteor.settings.adminId, ['admin']);
  }
  };

  Meteor.publish("messages", function () {
    return Messages.find();
  });

  Meteor.publish('allEmails', function (){ 
  return Meteor.users.find({},{fields: { emails: 1 }});
});
});

Meteor.methods({
  sendMessage: function (message) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Messages.insert({
      messageText: message,
      createdAt: new Date(),
      username: "anonymous"  // <-adds real username
    });
  }
});