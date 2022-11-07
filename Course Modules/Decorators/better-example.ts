function WithTemplate(template: string, hookID: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookID);
        const p = new constructor();

        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    };
}

@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
    name = 'Wilson';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
