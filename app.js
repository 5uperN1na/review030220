//Spread syntax

//example 1

let values = [15, 16, 23];

let valuesCopy = [...values];

let favoriteNumbers = [4, 8, ...values, 42];

console.log(favoriteNumbers); // [4, 8, 15, 16, 23, 42]

function add(a, b) {
    return a + b;
}

let operands = [5, 7];
add(...operands); // 12

//example 2

function add1(a, b, c) {
    console.log(a + b + c);
}
let enteredValues = [5, 2, 7];
add1(...enteredValues);
// same as: add.apply(null, enteredValues);
// same as: add(5, 2, 7);

//Spreading values in a array

let low = [0, 1, 2]; let high = [7, 8, 9];
let n = [...low, 3, 4, 5, 6, ...high];
console.log(n);
// [0,1,2,3,4,5,6,7,8,9]

//Spreading a string

let str = 'Code';
let chars = [...str];
console.log(chars);
// [ 'C', 'o', 'd', 'e' ]

/*
//Property Names in Object Literals

function getStats(a, b) {
    let resultAdd = a + b;
    let resultSub = a - b;
    return
    {
        sum: resultAdd, 
        difference: resultSub
    };
}
let stats = getStats(4, 2);
console.log(stats);
*/

function getStats(a, b) {
    let sum = a + b;
    let difference = a - b;
    return {
        sum: sum,
        difference: difference
    };
}
let stats = getStats(4, 2);
console.log(stats);

/*

function getS(a, b) {
    let sm = a + b;
    let dif = a - b;

    return {
        sm,
        dif
    };

    // or:    return { sum, difference }; }

    let s = getS(4, 2);
    console.log(s);
    */

//Destructure with arrays

let [a, b, c] = ['Apple', 'Banana', 'Pear'];

console.log(a);
// 'Apple' console.log(b); // 'Banana' console.log(c); // 'Pear'

/*
//Destructuring Assignment with Objects

let p1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 29
};

let { firstName } = p1;
// can do multiple let { lastName, age } = p1;
console.log(firstName);
// 'Jane' console.log(lastName); // 'Doe' console.log(age); // 29

*/

/*

//Object Destructuring: Default Values

let p1 = {    
    firstName: 'Jane',   
     lastName: 'Doe',    
     age: 29 };

let { firstName, gender = 'F' } = p1;
console.log(firstName);  // 'Jane' console.log(gender); // 'F'
*/

//Object Destructuring: Renaming Properties

let p1 = {    
    firstName: 'Jane',   
     lastName: 'Doe',   
      age: 29 };
let { firstName: fName } = p1;
console.log(fName); // 'Jane'