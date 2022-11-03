class Department {
    //private id: string;
    //private name: string;
    protected employees: string[];

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

class ITDepartment extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    constructor(id: number, public reports: string[]) {
        super(id, 'Accounting');
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

// Instantiate the class to build an object
const it = new ITDepartment(69, ['Vir7uaL']);
it.addEmployee('Patricia');
it.addEmployee('Erik');

//accounting.employees[2] = 'Ana'; // This won't work because it's defined as private property

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment(1, []);

accounting.addReport('Something went wrong...');
accounting.addReport('All good!');

accounting.addEmployee('Max');
accounting.addEmployee('Other than Max');

accounting.printReports();
accounting.printEmployeeInformation();

// Creates a new object with the class propeties plus methods
/* const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe(); */
