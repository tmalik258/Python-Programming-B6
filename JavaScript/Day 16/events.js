let colorChanged = true;

function changeColor () {
    const container = document.querySelector('.container');
    const box = document.querySelector('.box');
    console.log()
    if (colorChanged) {
        container.style.backgroundColor = 'black';
        box.style.backgroundColor = 'violet';
        console.log(colorChanged)
        colorChanged = false;
    }
    else {
        console.log(colorChanged)
        container.style.backgroundColor = 'blue';
        box.style.backgroundColor = 'yellow';
        colorChanged = true;
    }
}

const container = document.querySelector('.container');


container.addEventListener("click", changeColor);



function changeColorBox (event) {
    event.stopPropagation(); // ignore parent elements event_listeners
    const box = document.querySelector('.box');

    const color = box.style.backgroundColor;
    
    if (color == 'coral') {
        box.style.backgroundColor = 'black';
    }
    else {
        box.style.backgroundColor = 'coral';
    }
}

const box = document.querySelector('.box');
box.addEventListener('click', changeColorBox);