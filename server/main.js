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

  // finds all users
  Meteor.publish("messages", function () {
    return Messages.find();
  });

  // finds all user emails
  Meteor.publish('allEmails', function (){ 
   return Meteor.users.find({},{fields: { emails: 1 }});

  });

  // finds recipients for chat
  // Meteor.publish('findRecipients', function (){ 
  //  return Messages.find({},{fields: {recipients: 1}});

  // });

  // // finds all online users
  // Meteor.publish("userStatus", function() {
  //   return Meteor.users.find({ "status.online": true });
  // });
});

