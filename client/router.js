// ~/client/router.js

Router.route('/userList', {

	template : 'userList',

	waitOn : function() {
		return [ Meteor.subscribe("getAllUsers") ];
	},

	data : function() {
		return {
			list : Users.find( {}, {sort:{no:1}}).fetch()
		};
	}
});