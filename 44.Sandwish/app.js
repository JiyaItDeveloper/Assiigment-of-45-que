"use strict";
//Q:44
function Make_sandwish(item) {
    console.log('\nMaking Sandwish with:');
    item.forEach(element => console.log("-" + element));
    console.log("\nEnjoy your delicious Sandwish!");
}
Make_sandwish(['Ham', 'Cheese', 'lettuce']);
Make_sandwish(['Turkey', 'Bacon']);
Make_sandwish(['Peanut butter', 'Jelly']);
