import { Meteor } from 'meteor/meteor';

// var date = new Date();
// var now = moment(date).format("hh:mm a");

Meteor.methods({
  sendMessage: function (message, recipientID) {
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }

    Messages.insert({
      messageText: message,
      createdAt: new Date(),
      username: Meteor.user().emails[0].address,  // grabs user email address
      recipients: {recipientsA:[recipientID, Meteor.userId()], recipientsB: [Meteor.userId(), recipientID]}
      // sent_To: recipientID,  //stores the recipient in the message from client side
      // senderID: Meteor.userId()
    });
  },
  renderMessages: function(recipients){
   result = Messages.find({recipients: recipients}, {sort: {createdAt: 1}});
   return result;
   console.log(result);
}});

