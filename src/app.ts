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

    addEmployee(employee: string) {
        //this.id = 75;
        this.employees.push(employee);
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
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set setMostRecentReport(value: string) {
        if (!value) throw new Error('Please pass in a valid value!');

        this.addReport(value);
    }

    constructor(id: number, public reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
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

//console.log(accounting.mostRecentReport); // This will trigger the error because there's still no reports

accounting.addReport('Something went wrong...');
accounting.addReport('All good!');

console.log(accounting.mostRecentReport);
//accounting.mostRecentReport = ''; // This will trigger the error because it's empty
accounting.setMostRecentReport = 'Year End Report';

accounting.addEmployee('Max'); // This will trigger the error
accounting.addEmployee('Other than Max');

accounting.printReports();
accounting.printEmployeeInformation();

// Creates a new object with the class propeties plus methods
/* const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe(); */
