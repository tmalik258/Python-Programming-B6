// for (let i=1; i < 5; i = i + 1) {
//     console.log('hello world!');
// }

for (let i=1; i<20; i=i*2) {
    console.log(i);
}

// curly braces
let arrays = [23, 67, 90, 'hello', 'hi'];


// parenthesis
for (let i=0; i < arrays.length; i++) {
    console.log(arrays[i]);
}

let test = {
    name: "Azad bhai",
    age: 85,
    gender: "Male"
}

// for in loop
for (let key in test) {
    console.log(key, test[key]);
}


// console.log(test['age'])


let obj = {
    firstName: "Talha",
    lastName: "Malik",
    age: 23,
    occupation: "Software Eng."
}

let test1 = 0;
for (let key in obj) {
    // console.log(test1);
    test1++;
}

// concatenation
// dont use console.log inside for loop, instead use outside of loop
// "TalhaMalik23Software Eng."
