let a = 12;
let b = 50;
let sum = a + b;

let age = 56

//          or operator is || 
//          and operator is &&
//          not operator !

// false or true and false = true
if (!((age > 18) && (age > 60))) {
    console.log("hey");
}

if (!false) {
    console.log('1232')
}

age = 56;

// == is equal-to operator where datatype is not also checked
// != is not equal-to operator

if (!((age != 56) && (age == 56))) {
    console.log('age is true')
}

// === is equal-to operator where datatype is also checked

if ('12' == 12) {
    console.log('they are equal')
}

if ('11' !== 12) {
    console.log('they are not equal')
}

