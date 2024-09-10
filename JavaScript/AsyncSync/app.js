// const pro = new Promise() // literal promise object


// a func which creates promise object

// fetch('https://api.openweathermap.org/');


// hoisting


// synchronously

let test = 0;

test = 0 + 2;

console.log(test);

// name()



console.log('hello');
console.log('talha,');
console.log('how')
console.log('are')
console.log('you')
console.log('?')


// asynchronous code
setTimeout(() => {
    console.log('abdul rehman');
    console.log('ahmed')
    console.log('usman')
    setTimeout(() => {
        console.log('anas')
    }, 2000)
}, 2000)


setTimeout(() => {
    console.log('raffay');
}, 2000)

setTimeout(() => {
    console.log('mehdi');
}, 500)


// asynchronous arrow function
const testFunc = async () => {
    console.log('hello')
}

testFunc();

// regular asynchronous function
async function testfunc2 () {

}