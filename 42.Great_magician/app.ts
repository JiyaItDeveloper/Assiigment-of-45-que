//Q 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magician :string[]=['Harry Porter','Albus Dumbledore','Ron wasley','Hermione Granger'];

function make_great(magical :string[]){
    
    for(let i=0; i<magical.length;i++){
        magician[i]= 'the Great' +  magical[i]
    }

}
 function magicians(magic:string[]){
    magic.forEach(element =>{
        console.log(element);
    })
 }
make_great(magician);
 magicians(magician);