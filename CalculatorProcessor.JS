//Main Function in JS

var ans = undefined;

function Calculate() {
	// get string from text box
	var inputStr = document.getElementById("textbox").value
	var resultsBox = document.getElementById("resultsbox");
	
	// command processing
	if(inputStr == "clr" || inputStr == "clear") {
		resultsBox.innerHTML = "";
		return;
	}
	
	// process string
	var results = LexicalAnalysis(inputStr);
	ans = results;
	
	
	// send string to results box
	var newResult = inputStr + " -> " + results + "<br /><br />";
	resultsBox.innerHTML = newResult + resultsBox.innerHTML;
	return;
}

function LexicalAnalysis(str) {
	// TODO: actually do the algorithm
}

/*
class LexNode {
	constructor(lhs, rhs) {
		this.lhs = lhs;
		this.rhs = rhs;
	}
	this.lhs = undefined;
	this.rhs = undefined;
}

class NumberNode {
	constructor(lhs) {
		LexNode.call(lhs, undefined);
		this.name = "Number";
	}
	
	function Evaluate() {
		return this.lhs * 1;
	}
}

var nn = NumberNode(4);

class SumNode {
	constructor(lhs, rhs) {
		LexNode.call(lhs, rhs);
		this.name = "Sum";
	}
  
	function Evaluate() {
		return lhs.Evaluate() + rhs.Evaluate();
	}
}
*/

