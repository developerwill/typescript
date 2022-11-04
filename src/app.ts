interface AddFn {
    (a: number, b: number): number; // Anonymous function with a return type of number
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name: string; // It can only be set once
}

interface Greetings extends Named {
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
