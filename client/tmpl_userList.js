// ~/client/tmpl_userList.js

Template.userList.helpers({
	listName : function(){
		return "사용자목록";
	},
	list : function(){
		return this.userList;
	}
});

Template.userList.events({
	
});

Template.userList.rendered = function(){
	Meteor.subscribe("getAllUsers");
};