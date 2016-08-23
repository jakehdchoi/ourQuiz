// ~/server/publish.js

// getAllUsers를 publish명으로 정함
// 클라이언트에서 subscribe하기 위해서 param을 사용
Meteor.publish("getAllUsers", function(param) {
	console.log(param);
	return Users.find();
});