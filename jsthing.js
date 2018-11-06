 function myFunction(choice) {

 	//var playerchoice = prompt("Choose Scissors, Paper Or Rock");
 	var myFunction;
    var computerchoice = Math.floor((Math.random() * 12) + 1);
    var choice2;
    

    if (computerchoice <= 4) {
    	choice2 = "rock";
    	document.getElementById("rock").style.backgroundColor = "red";
    	document.getElementById("rock").style.backgroundColor = initial;
    } else if (computerchoice >= 5 && computerchoice <= 7) {
    	choice2 = "scissors";
    	document.getElementById("paper").style.backgroundColor = "red";
    	document.getElementById("paper").style.backgroundColor = initial;
    } else if (computerchoice >= 8) {
    	choice2 = "paper";
    	document.getElementById("scissors").style.backgroundColor = "red";
    	document.getElementById("scissors").style.backgroundColor = initial;
    } else {
    	console.log("error something went wrong");
    }
  
  var choices = [playerchoice, choice2];

    if (choice2 == playerchoice) {
    	console.log(choices);
    	document.getElementById("outcome").innerHTML =
    	"Its a tie";
    	document.getElementById("outcome").style.color = "red";
    } else if (choice2 == "rock" && playerchoice == "paper") {
    	console.log(choices);
    	document.getElementById("outcome").innerHTML =
    	"You Win!";
    	document.getElementById("outcome").style.color = "Chartreuse ";
    } else if (choice2 == "paper" && playerchoice == "rock") {
    	console.log(choices);
    	document.getElementById("outcome").innerHTML =
    	"The Computer Won!";
    	document.getElementById("outcome").style.color = "red";
    } else if (choice2 == "paper" && playerchoice == "scissors") {
    	console.log(choices);
    	document.getElementById("outcome").innerHTML =
    	"You Win!";
    	document.getElementById("outcome").style.color = "Chartreuse ";
    } else if (choice2 == "scissors" && playerchoice == "paper") {
    	console.log(choices);
    	document.getElementById("outcome").innerHTML =
    	"The Computer Won!";
    	document.getElementById("outcome").style.color = "red";
    } else if (choice2 == "rock" && playerchoice == "scissors") {
    	console.log(choices);
    	document.getElementById("outcome").innerHTML =
    	"The Computer Won!";
    	document.getElementById("outcome").style.color = "red";
    } else if (choice2 == "scissors" && playerchoice == "rock") {
    	console.log(choices);
    	document.getElementById("outcome").innerHTML =
    	"You Won!";
    	document.getElementById("outcome").style.color = "Chartreuse";
    } else {
    	console.log("error something went wrong");
    }
     
}