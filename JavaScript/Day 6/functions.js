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

function sum (a, b) {
    let result = a + b;
    console.log(result);
}

greater(5, 2);

sum(2585, 1)