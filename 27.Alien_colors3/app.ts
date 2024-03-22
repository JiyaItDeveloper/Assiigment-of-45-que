//Q:27 .Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien

//Verion 1 of the program

let alienColor :string= "green"
if(alienColor==="green") {
    console.log("version 1:Player earned 5 points.");
}

else if(alienColor==="yellow") {
    console.log("Player earned 10 points.");
}

else if(alienColor==="red") {
    console.log("Player earned 15 points.");
}

else{
    console.log("Please select right color.")
}


//Verion 2 of the program

alienColor ="yellow";
if(alienColor==="green") {
    console.log("Player earned 5 points.");
}

else if(alienColor==="yellow") {
    console.log(" version 2:Player earned 10 points.");
}

else if(alienColor==="red") {
    console.log("Player earned 15 points.");
}

else{
    console.log("Please select right color.")
}

//Verion 3 of the program

alienColor ="red";
if(alienColor==="green") {
    console.log("Player earned 5 points.");
}

else if(alienColor==="yellow") {
    console.log("Player earned 10 points.");
}

else if(alienColor==="red") {
    console.log("version 3:Player earned 15 points.");
}

else{
    console.log("Please select right color.")
}