const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hikking'];

activeHobbies.push(...hobbies);

// Array destructuring
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;

console.log(hobby1, hobby2, remainingHobbies);
