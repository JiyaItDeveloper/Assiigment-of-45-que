"use strict";
//Q:45 
Object.defineProperty(exports, "__esModule", { value: true });
function car_model(manufacturing, modelName, ...option) {
    let carinfo = Object.assign({ manufacturing,
        modelName }, Object.assign({}, ...option));
    return carinfo;
}
let answer = car_model('civic', 'honda', { color: "white" }, { features: ['Navigation', 'Power window'] });
console.log(answer);
