//Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface item{
    name:string
    price:number
}
const book : item={
    name:'Essiential typscript',
    price:550

}
const apple : item={
    name:'apple',
    price:300

}
console.log(`book name:${book.name},price: $${book. price}`)
console.log(`apple name:${apple.name},price:$${apple .price}`)