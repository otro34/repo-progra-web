const vehicules = ["mustang", "camaro", "range rover"];

const [ car1, car2, car3 ] = vehicules;

console.log(car1);
console.log(car2);
console.log(car3);

const person = { name: "Juan", age: 30, country: "Chile" };

const newPerson = { ...person, age: 35, city: "Santiago" };

const showPerson = ({ name, age, country, city }) => {
    console.log(name);
    console.log(age);
    console.log(country);
    console.log(city);
}

showPerson(person);
showPerson(newPerson);