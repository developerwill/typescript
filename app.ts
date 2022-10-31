/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Wilson',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
}; */

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Wilson',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

//person.role.push('admin');
//console.log(`${person.role}`);

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}

if (person.role === Role.ADMIN) {
    console.log(`Is admin`);
}
