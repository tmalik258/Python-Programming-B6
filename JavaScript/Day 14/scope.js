// global scope - it can be accessible anywhere
let sum = 10;

// local ya function scope - only accessible inside the function
function add() {
    var i = 10;
    sum += i;
    console.log(sum)
    return sum;
}
let result = add();


// block scope - only accessible inside block - let and const only (var doesn't has block scope)
if (sum > 10) {
    let result = sum + 20;
    // console.log(result);
}
