"use strict";
//Q 42
let magician = ['Harry Porter', 'Albus Dumbledore', 'Ron wasley', 'Hermione Granger'];
function make_great(magical) {
    for (let i = 0; i < magical.length; i++) {
        magician[i] = 'the Great' + magical[i];
    }
}
function magicians(magic) {
    magic.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
magicians(magician);
