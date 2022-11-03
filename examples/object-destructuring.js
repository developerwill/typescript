const person = {
    firstName: 'Wilson',
    age: 30,
};

// Object destructuring
const { firstName: userName } = person;

console.log(`${userName}`);
