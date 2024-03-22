var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q18 1
var places = ['Karachi', 'Hyderabad', 'Multan', 'Lohore'];
// console.log('original ' +places);
//2
console.log('copy ' + __spreadArray([], places, true).sort());
//3
console.log('original ' + places);
//4
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
//5
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
//6
console.log('original ' + places.sort());
//7
console.log('original ' + places.sort().reverse());
//8
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
