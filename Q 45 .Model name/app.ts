//Q:45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.



import { features } from "process";

function car_model(manufacturing :string, modelName :string,...option : {[obj :string] :any}[] )
{let carinfo={
    manufacturing,
    modelName,
    ...Object.assign({},...option)
}
return carinfo;
}
let  answer =car_model('civic','honda',{color:"white"},{features:['Navigation','Power window']})
console.log(answer)