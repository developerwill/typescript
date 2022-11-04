interface Greetings {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetings {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + '' + this.name);
    }
}

const user1 = new Person('Wilson');

user1.greet(`My name is `);
console.log(user1);
