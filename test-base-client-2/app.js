var listAddress = "https://nigetestbox.firebaseio.com/list";
var firebaseListRef = new Firebase(listAddress);
var client = 2;
var data = 0;


var onChildAdded = function(snapshot) {
	
	data = snapshot.val().value;
	var time = new Date();
	$("#result").text("onChildAdded "+time.getUTCHours()+":"+time.getUTCMinutes()+" client "+snapshot.val().client+" new child value is "+snapshot.val().value);
	
	console.log("onChildAdded "+time.getUTCHours()+":"+time.getUTCMinutes()+" client "+snapshot.val().client+" new child value is "+snapshot.val().value);

}

firebaseListRef.on('child_added', onChildAdded);

var createItem = function(obj) {
		
		var newItemForFirebaseListRef = firebaseListRef.push();
		var incrementedData = ++data;
		
		newItemForFirebaseListRef.set({"value":incrementedData, "client":client}, function(error){
			if (error) {
				console.log("ERROR");
			} else {
			}
		});	
};