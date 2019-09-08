let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByTagName("i");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	// let li = document.createElement("li");
	// li.appendChild(document.createTextNode(input.value));
	// ul.appendChild(li);
	// input.value = "";

	var divClassWrapper = document.createElement("div");
	divClassWrapper.classList.add("li-wrapper");

	var li = document.createElement("li");
	var createDiv = document.createElement("div");

	li.appendChild(document.createTextNode("\u2022 " + input.value));
	divClassWrapper.appendChild(li);
	divClassWrapper.appendChild(createDiv);
	ul.appendChild(divClassWrapper);

	input.value = "";
	createDiv.classList.add("div");
	var createDeleteButton = document.createElement("i");
	createDeleteButton.classList.add("fa", "fa-trash");
	createDiv.appendChild(createDeleteButton);
	deleteParentNodeOnClick();
}

function addListAfterCLick(){
	if(inputLength() >0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

button.addEventListener("click", addListAfterCLick);
input.addEventListener("keypress", addListAfterKeypress);


function toggleListItem(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("done");
	}
}

ul.addEventListener("click", toggleListItem);

function createDeleteButtonIcon(){
	for (var j = 0; j <li.length; j++){
		var createDeleteButton = document.createElement("i");
		var createDiv = document.getElementsByClassName("div");
		console.log(createDiv);
		createDeleteButton.classList.add("fa", "fa-trash");
		createDiv[j].appendChild(createDeleteButton);
	}
}

function deleteNodeOnClick(e){
	var trash = document.querySelectorAll("i");
	for(var j = 0; j < trash.length; j++){
		this.parentNode.parentNode.remove();
	}
}

function deleteParentNodeOnClick(){
	for(var i = 0; i < deleteButton.length; i++){
		deleteButton[i].addEventListener("click", deleteNodeOnClick);
	}
}

createDeleteButtonIcon();
 deleteParentNodeOnClick();


	/*button.addEventListener("click",function(){
		if(input.value.length>0){
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value = "";
		}
	})

	input.addEventListener("keypress", function(event){
		if(input.value.length > 0 && event.keyCode === 13){
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value = "";
		}
	})*/