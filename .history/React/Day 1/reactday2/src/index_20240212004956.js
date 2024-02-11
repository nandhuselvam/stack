var person = {
    name : "Arthanari",
    age : 27,
    location: "tgode",
}

// let name = person.name;
// let age = person.age;
// let location = person.location;

var {name, age, location} = person

console.log(`${name}, ${age}, ${location} `);