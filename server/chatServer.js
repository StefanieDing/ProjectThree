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
      recipients: [recipientID, Meteor.userId()]
      // sent_To: recipientID,  //stores the recipient in the message from client side
      // senderID: Meteor.userId()
    });
  }
  // renderMessages: function(recipients){
  // var recipients2 = [recipients[1], recipients[0]];
  //   db.getCollection('msg').find({$or:[{recipients: [ "johndougherty68@gmail.com", "kid@kid.com" ]},{recipients: [ "kid@kid.com","johndougherty68@gmail.com" ]}]})
  //  result = Messages.find({$or:[{recipients: recipients}, {recipients:recipients2}], {sort: {createdAt: 1}}});
  //  return result;
  //  console.log(result);
  //   }
  
});

