import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';

Meteor.startup(function(){
 $.getScript('stylesheets/dist/sweetalert.min.js', function(){
 });
});


