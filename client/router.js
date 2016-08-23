// ~/client/router.js

Router.route('/userList', {

	template : 'userList',

	waitOn : function() {
		if(Meteor.userId()){
			return [ Meteor.subscribe("getAllUsers") ];	
		}
		else{
			return [];
		}
	},

	data : function() {
		return {
			userList : Users.find( {}, {sort:{no:1}}).fetch()
		};
	}
});

Router.route('/userInput', {

	template : 'userInput'
	
});