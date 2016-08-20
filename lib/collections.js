// lib/collections.js
Users = new Mongo.Collection('users');

if (Meteor.isServer){
	Meteor.startup(function(){
		if(Users.find().count() == 0){
			Users.insert({no:4, name:"aaa", email:"aaa@email.com"});
			Users.insert({no:1, name:"ddd", email:"ddd@email.com"});
			Users.insert({no:3, name:"bbb", email:"bbb@email.com"});
			Users.insert({no:2, name:"ccc", email:"ccc@email.com"});
			console.log('insert complete');
		}
	});
}