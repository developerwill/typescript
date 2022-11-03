class Department {
    name: string;

    constructor(cName: string) {
        this.name = cName;
    }

    // Method with type safety
    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
}

// Intanciate the classe to build an object
const accounting = new Department('Accounting');
accounting.describe();

// Creates a new object with the class propeties plus methods
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();
