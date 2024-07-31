let car = {
    company: "toyota", // key: value pair
    name: "corolla", 
    model: 2023, 
    color: ["red", "blue", "black", "white"],
    marks: {
        maths: 52,
        physics: 42
    }
};

console.log(car.model, car.name, car.company)
console.log(car["name"])


console.log(car["color"][2])