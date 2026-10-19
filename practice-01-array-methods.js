const dogs = [
  { name: "Layla", age: 1, breed: "Cocker Spaniel" },
  { name: "Diamond", age: 6, breed: "Staffy" },
  { name: "Buddy", age: 4, breed: "Labrador" },
  { name: "Milo", age: 2, breed: "Beagle" }
];

// print the name of every dog to the console using .map()

dogsName = dogs.map(dog => {
   return dog.name;
});
console.log(dogsName);

// create a new array containing only the dog ages

dogAges = dogs.map(dog => {
    return dog.age;
});
console.log(dogAges);

// create a new array containing only the breeds

dogBreeds = dogs.map(dog => {
    return dog.breed;
});
console.log(dogBreeds);

// create a new array of short sentences

const dogStatement = dogs.map((dog)=> {
    return `${dog.name} is ${dog.age} years old.`;
});
console.log(dogStatement);

// create a new array containing only dogs older than 2

const overTwoDogs = dogs.filter((dog) => {
    return dog.age > 2;
});
console.log(overTwoDogs);

// find the first dog that is a Labrador

const labrador = dogs.find((dog) => {
    return dog.breed === "Labrador"
});
console.log(labrador);

// calculate the total ge of all the dogs

const totalAge = dogs.reduce((total, dog) => {
    return total + dog.age 
}, 0);
console.log(totalAge);
