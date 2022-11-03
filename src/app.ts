class Department {
    //private id: string;
    //private name: string;
    private employees: string[];

    constructor(private readonly id: number, public name: string) {
        //this.name = name;
        this.employees = [];
    }

    // Method with type safety
    describe(this: Department) {
        console.log(`${this.id} Department: ${this.name}`);
    }

    addEmployee(empployee: string) {
        //this.id = 75;
        this.employees.push(empployee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// Instantiate the class to build an object
const accounting = new Department(69, 'Accounting');
accounting.addEmployee('Patricia');
accounting.addEmployee('Erik');

//accounting.employees[2] = 'Ana'; // This won't work because it's defined as private property

accounting.describe();
accounting.printEmployeeInformation();

// Creates a new object with the class propeties plus methods
/* const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe(); */
