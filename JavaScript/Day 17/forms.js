function handleSubmit (event) {
    // event.preventDefault();

    console.log(event);
    console.dir(event.target.option);
    
    // console.dir(event.target[0]);
    // console.dir(event.target[1]);
    // console.dir(event.target[2]);
    // console.dir(event.target[0].value);
    // console.dir(event.target[1].value);
    // console.dir(event.target[2].value);

    console.dir(event.target.fname);
    console.dir(event.target.lname);

    console.dir(event.target.fname.value);
    console.dir(event.target.lname.value);
}

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);


let age = 18;

if (age >= 18) {
    console.log("you are an adult")
}
else {
    console.log("you are a teenager")
}

// unary operator
// binary operator
// ternary operator

// operand

let a  = 12;
let b = 24;

// condition ? true : false;
(a < 10) ? console.log(a + 2) : console.log( a - 1 );
