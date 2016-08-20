Template.userList.helpers({
	listName : function(){
		return "사용자목록";
	},
	list : function(){
		var arr = [
			{no:4, name:"aaa" ,email:"aaa@email.com"},
			{no:1, name:"ddd", email:"ddd@email.com"},
			{no:3, name:"bbb" ,email:"bbb@email.com"},
			{no:2, name:"ccc" ,email:"ccc@email.com"}
		];
		return arr;
	}
});

Template.userList.events({
	
});

Template.userList.rendered = function(){

};