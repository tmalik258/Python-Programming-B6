const sum = (a, b) => console.log("sum: ", a + b);


// anonymous function or benaam function

sum(12, 34);

// arithmetic operators
// logical operator
// comparison operator


// two parameter arrow function
// const avg = (a, b) => {
//     let result = (a + b)/2;
//     console.log(a, b);
// }
const avg = (a, b) => console.log("avg: ", (a + b)/2);

avg(23, 58);

// one parameter arrow function can be with parenthesis or withou parenthesis
const greeting = name => console.log("Hi ", name, "!");

greeting("talha");

(a => console.log(a))('azad bhai, azad khayal wale');
