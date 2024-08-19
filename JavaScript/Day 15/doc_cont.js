const para = document.getElementsByTagName('p');

console.dir(para);

const first_p = document.querySelector('.para');

console.dir(first_p);

const parasall = document.querySelectorAll('.para');

console.dir(parasall);

const new_btn = document.createElement('button');
new_btn.innerHTML = '<i>click here</i>';

const new_p = document.createElement('p');
new_p.innerText = 'hello world'

const container_div = document.querySelector('#container');

// container_div.appendChild(new_btn); // to append only single element as last child

// container_div.append(new_btn, new_p);    // to append multiple elements as last children

container_div.prepend(new_btn); // to append as a first child

container_div.remove();


const list = [12, 4, 1, 89];

list.push('12');