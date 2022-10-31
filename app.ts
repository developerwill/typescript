const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Wilson',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};

person.role.push('admin');

console.log(`${person.role}`);

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}
