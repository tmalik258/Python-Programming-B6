const cars = ['bmw', 'toyota', 'ford', 'honda'];

let i = 1;

for ( ; i < cars.length; ) {
    const value = cars[i];
    console.log(value);

    if (i % 2 == 0) {
        i *= 2;
    }
    else if (i % 3 == 0) {
        i *= 3;
    }
}

let index = 0;
while (index < cars.length) {
    console.log(cars[index]);

    index++;
}

function random(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
    }
}

random(cars);


let j=0;
do {
    console.log(j);
    j++;
} while (j<0);


let k = 0;
while (k < 0) {
    console.log(k);

    k++;
}
