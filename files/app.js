// LISTEN FOR CLICKS

var boxes = document.querySelectorAll("div.row > div.square");
var count = 1;

var listenClicks = function() {
	for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", selectSquare);
	}
};

// TURN VARS + FUNCTION

var selectSquare = function(event) {
	if (count === 1) {	
		this.classList.add("selectedX");
		this.classList.remove("selectedO");
		count++;
	}
	else if (count === 2) {
		this.classList.toggle("selectedO");
		count--;	
	}
};

// RESET

var resetButton = function() {
	var boxes = document.querySelectorAll("div.row > div.square");
		for (var i = 0; i < boxes.length; i++) {
		boxes[i].className = "square";
	}
	count = 1;
};

// INITIALIZER

var initialize = function() {
	listenClicks();
	document.querySelector("#resetter").onclick = resetButton;
};

window.onload = initialize;