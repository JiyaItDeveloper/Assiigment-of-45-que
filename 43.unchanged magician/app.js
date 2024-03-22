"use strict";
//Q:43
let magician = ['Harry Porter', 'Albus Dumbledore', 'Ron wasley', 'Hermione Granger'];
function copyarray(copy) {
    return [...copy];
}
function make_great(magical) {
    for (let i = 0; i < magical.length; i++) {
        magical[i] = 'the Great' + magical[i];
    }
}
function magicians(magic) {
    magic.forEach(element => {
        console.log(element);
    });
}
const copymagicianArray = copyarray(magician);
make_great(copymagicianArray);
console.log('\n\nThis is my  original array:');
magicians(magician);
console.log('\n\nThis is my copy modified array:');
magicians(copymagicianArray);
