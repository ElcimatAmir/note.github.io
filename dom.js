var note = document.getElementById("posts");
var saveButton = document.getElementById("button");
var header = document.getElementById("header1") ;

saveButton.onclick = function() {
	var title    = document.getElementById("titleInput");
	var text     = document.getElementById("textInput");
	var newList  = document.createElement("div") ;
	var newTitle = document.createElement("h2") ;
	var newGoal  = document.createElement("p") ;
	var deleteButton = document.createElement("input") ;
	deleteButton.value = "delete" ;

	newList.setAttribute("id" , "theNotesDiv")   ;
	newTitle.setAttribute("id" , "theNotesTitle");
	newGoal.setAttribute("id" , "theNotesText")  ;
	deleteButton.setAttribute("id" , "dButton") ;
	deleteButton.setAttribute("type", "button") ;


	if (title.value == "" ) title.value = "NO TITLE"   ;
	if (text.value == "" )  text.value  = "***empty***";

	newTitle.textContent = title.value ;
	newGoal.textContent = text.value ;
	
	title.value = "" ;
	text.value = "" ;

	newList.appendChild(newTitle);
	newList.appendChild(newGoal);
	newList.appendChild(deleteButton);
	note.appendChild(newList);

	deleteButton.onclick = function() {
		note.removeChild(newList) ;
	}
}