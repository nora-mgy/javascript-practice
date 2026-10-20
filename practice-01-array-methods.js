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


// Mixed practice

// Task 1:
// Create an array containing only the names of dogs younger than 4.

const youngDogs = dogs
.filter((dog) => {
    return dog.age < 4;
})
.map((dog) => {
    return dog.name;
});
console.log(youngDogs);


// Task 2
// Find the first dog is older than 3 yers old, then print only the dog's name.

const threeYearOldDog = dogs.find((dog) => {
    return dog.age > 3;
})
console.log(threeYearOldDog.name);

// Task 3
// Calculate the average age of all the dogs.

const ageTotal = dogs.reduce((total, dog) => {
    return total + dog.age
}, 0);
const averageAge = ageTotal / dogs.length;
console.log(averageAge);

// Task 4
// Create a new array containing sentences for only the dogs aged 2 or older.

const dogsOverTwo = dogs.filter((dog) => {
    return dog.age >= 2;
})
.map((dog) => {
    return `${dog.name} is ${dog.age} years old.`
});
console.log(dogsOverTwo);
