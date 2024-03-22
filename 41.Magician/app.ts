//Q:41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician :string[]=['Harry Porter','Albus Dumbledore','Ron wasley','Hermione Granger'];
 function magicians(magic:string[]){
    magic.forEach(element =>{
        console.log(element);
    })
 }

 magicians(magician);
 