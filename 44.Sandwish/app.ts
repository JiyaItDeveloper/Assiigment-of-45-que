//Q:44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function Make_sandwish(item :string[]){
    console.log('\nMaking Sandwish with:')
    item.forEach(element =>console.log("-" + element));
    console.log("\nEnjoy your delicious Sandwish!")

}
Make_sandwish(['Ham','Cheese','lettuce']);
Make_sandwish(['Turkey','Bacon']);
Make_sandwish(['Peanut butter','Jelly']);