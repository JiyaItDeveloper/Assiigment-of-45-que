//Q:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician :string[]=['Harry Porter','Albus Dumbledore','Ron wasley','Hermione Granger'];

function copyarray(copy:string[]){
   return [...copy]
}
function make_great(magical :string[]){
    
    for(let i=0; i<magical.length;i++){
        magical[i] = 'the Great' +  magical[i];
    }

}
 function magicians(magic:string[]){
    magic.forEach(element =>{
        console.log(element);
    })
 }

 const copymagicianArray=copyarray(magician);
 
make_great(copymagicianArray);

console.log('\n\nThis is my  original array:');
 magicians(magician);

 
console.log('\n\nThis is my copy modified array:');
magicians(copymagicianArray);