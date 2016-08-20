// ~/client/tmpl_userListItem.js

Template.userListItem.helpers({
	
});

Template.userListItem.events({
	'click button[name=star]' : function(evt, tmpl){

		// 버튼을 클릭하면 경고 창에 아래의 메시지가 나온다.
		alert(this.no +", "+ this.name +", "+ this.email);

		// 클릭 후 버튼을 사라지게 만든다
		$(evt.target).hide();

		// findAll 함수로 tmpl 안에 오브젝트를 검색할 수 있으며
		// 콘솔에서 확인할 수 있다. 
		var tdArr = tmpl.findAll("td");
		console.log('td들', tdArr);
	},
	'click button[name=remove]' : function(evt, tmpl){
		// 나는 _id를 만든적이 없지만 몽고디비가 자동으로 만든다.
		Users.remove({_id:this._id});
	}
});

Template.userListItem.rendered = function(){

};