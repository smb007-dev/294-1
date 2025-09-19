const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 17 },
  { id: 4, name: "David", age: 40 }
];

/*
1. forEach
- Loops through each element
- Runs a function, but does NOT return anything
- Good for side effects (logging, DOM updates, etc.)
*/
users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});


/*
2. map
- Transforms each element
- Returns a NEW array with the transformed values
*/
const names = users.map(user => user.name);
console.log("Names:", names); // ["Alice", "Bob", "Charlie", "David"]


/*
3. filter
- Tests each element with a condition
- Returns a NEW array with only the elements that pass
*/
const adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults); // Alice, Bob, David


/*
4. find
- Returns the FIRST element that matches a condition
- Returns undefined if nothing matches
*/
const over35 = users.find(user => user.age > 35);
console.log("First user over 35:", over35); // David


/*
5. reduce
- Uses an "accumulator" to reduce the array to a single value
- Can return ANYTHING (number, string, object, etc.)
- Needs an initial value (here: 0)
*/
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total age:", totalAge); // 112
