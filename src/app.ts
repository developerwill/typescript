class Department {
    name: string;

    constructor(cName: string) {
        this.name = cName;
    }
}

const accounting = new Department('Accounting');

console.log(accounting);
