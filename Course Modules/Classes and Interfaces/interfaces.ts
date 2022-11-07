interface AddFn {
    (a: number, b: number): number; // Anonymous function with a return type of number
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string; // It can only be set once and it's optional
    outPutName?: string;
}

interface Greetings extends Named {
    greet(phrase: string): void;
}

class Person implements Greetings {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) this.name = n;
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + '' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

const user1 = new Person('Wilson');
const user2 = new Person();

user1.greet(`My name is `);
user2.greet(`My name is `);
//console.log(user1, user2);
