const para = document.getElementsByTagName('p');

console.dir(para);

const first_p = document.querySelector('.para');

console.dir(first_p);

const parasall = document.querySelectorAll('.para');

console.dir(parasall);

const new_btn = document.createElement('button');
new_btn.innerHTML = '<i>click here</i>';

const new_p = document.createElement('p');

const container_div = document.querySelector('#container');
container_div.appendChild(new_btn);


const list = [12, 4, 1, 89];

list.push('12')