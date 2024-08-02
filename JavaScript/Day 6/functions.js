// function greater () {
//     let a = 56;
//     let b = 12;

//     if ( a > b ) {
//         console.log(a + ' is greater than ' + b);
//     } 
//     else {
//         console.log(b + ' is greater than ' + a);
//     }
// }

// greater(); // no parameter functions

function greater (a, b) {
    if ( a > b ) {
        console.log(a + ' is greater than ' + b);
    } 
    else {
        console.log(b + ' is greater than ' + a);
    }
}

function area (l, w) {
    let result = l * w;
    console.log('area is ' + result);
}

area(123, 87);
area(3, 2);


greater(12, 15) // two parameters functions
greater(58, 1);
greater(85, 23);


greater(5, 2);

let result = 0;

// function sum (a, b) {
//     return result;
// }

console.log(result);

result = sum(2, 1);
console.log(result);
console.log(sum(2, 5));

// if a is greater than b, then return sum of a and b
// else return product of a and b

// Write a program that takes in a string that has camel casing and outputs
// the same string but with snake casing

// sample input:        "camelCasing"
// sample output:       "camel_casing"


let isResultToName = "camelCasing";
let is_result_to = 'snake_casing';


let input = "talhaMalik";


// input = prompt("give me a string");

