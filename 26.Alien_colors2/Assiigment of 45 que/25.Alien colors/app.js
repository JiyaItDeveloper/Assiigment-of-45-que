//Q 25
//Create a variable called alien_color
var alien_color = 'Green';
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === 'Green') {
    console.log('Player just earned 5 points !');
}
//Write one version of this program that passes the if test and another that fails.
alien_color = 'Yellow';
//(The version that fails will have no output.)  
if (alien_color === 'Green') {
    console.log('Player just earned 5 points !');
}
