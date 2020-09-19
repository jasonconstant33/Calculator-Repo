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
  if(str.length == 0) {return null;}
  
  // composed of strings and node objects
  // EX. ["34 + (3.2*4)"]
  //     ["34 + ", ParenthesisNode("3.2*4")]
  //     Sum( NumberNode(34), ParenthesisNode( MultiplcationNode(3.2, 4) ))
  let tokenList = [];
    
  // Parenthesis
  // Scan for first start parenthesis, find appropriate end parenthesis
  // Recursively find object within LexicalAnalysis(substring)
  //  (() NOT
  //  ())( NOT
  //  (()())
  //  121210
  //        ()()
  //    10
  //  ))(( NOT
  let indexOpen = 0;
   while (indexOpen < str.length) {
    if (str.charAt(indexOpen) === "(") {
      tokenList.push( str.slice(0,indexOpen) );
      let counter = 1;
      // loop to find the correct ")"
      let indexClose = indexOpen + 1;
      while (counter !== 0 || indexClose < str.length){
        if (str.charAt(indexClose) === "(") {
          counter++;
        }
        if (str.charAt(indexClose) === ")") {
          counter--;
        }
        indexClose++;
      }
      // Check that parens are balanced
      if (counter === 0) {   
        // TODO CHECK EMPTY STRING
        let substring = str.substring(indexOpen+1, indexClose);
        let node = ParenthesisNode(substring);
        // once you find the indexOpen, update the outer loop's indexOpen
        tokenList.push(node);
        //remove the part of the str that you have already stored as a no parenthesis prefix or the first paren node
        str = str.substring(indexClose);
        // Set counters back to starting values
        indexOpen = 0;
        counter = 1;
        indexClose = indexOpen + 1
      } else {
        return null; 
      }
    } else {
      if(){WRITECODE} else {indexOpen++;}
    }
  }
  // 2+(4*1)+6-(2*3)
  // ["2+", ParenthesisNode("4*1"), "+6-", ParenthesisNode("2*3")]
  
  

  // Exponent
  // Scan for '^', determine base term, determine exponent term
  // create node
  
  
  
  // Mult/Division
  // Scan for '*' and '/', determine first and second terms
  // create node
  
  
  // Add/Sub
  
  
  
  
  // Number
  let index = 0;
  let next_match = str.match(/[\d.]+/x);
  // while iterating through token list
  // if any string is number, turn it into a number node
  for (var i = 0; i < tokenList.length; i++) {
    if( tokenList[i] instanceof String ) {
      tokenList[i] = NumberNode( tokenList[i] );
    }
  }
  
  // return entire node tree
  return tokenList[0]
}

  
class LexNode {
    this.lhs = undefined;
    this.rhs = undefined;
    
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    
    Evaluate() {
        return null;
    }
}

class ParenthesisNode {
    constructor(lhs) {
        LexNode.call( LexicalAnalysis(lhs), undefined );
        this.name = "Parenthesis";
    }
    
    Evaluate() {
        return this.lhs;
    }
}

class SumNode {
    constructor(lhs, rhs) {
        LexNode.call( LexicalAnalysis(lhs), LexicalAnalysis(rhs) );
        this.name = "Sum";
    }
  
    Evaluate() {
        return lhs.Evaluate() + rhs.Evaluate();
    }
}

class NumberNode {
    constructor(lhs) {
        LexNode.call( Number(lhs), undefined );
        this.name = "Number";
    }
    
    Evaluate() {
        return this.lhs;
    }
}









