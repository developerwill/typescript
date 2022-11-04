abstract class Department {
    //private id: string;
    //private name: string;
    static fiscalYear = 2022;
    protected employees: string[];

    constructor(protected readonly id: number, public name: string) {
        //this.name = name;
        this.employees = [];
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    // This method has to be implemented on the sub-classes
    abstract describe(this: Department): void;

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

    describe() {
        console.log('ID Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: number, public reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstace() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment(30, []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
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

const accounting = AccountingDepartment.getInstace();

//console.log(accounting.mostRecentReport); // This will trigger the error because there's still no reports

accounting.addReport('Something went wrong...');
accounting.addReport('All good!');

console.log(accounting.mostRecentReport);
//accounting.mostRecentReport = ''; // This will trigger the error because it's empty
accounting.setMostRecentReport = 'Year End Report';

accounting.addEmployee('Max'); // This will trigger the error
accounting.addEmployee('Other than Max');

//accounting.printReports();
//accounting.printEmployeeInformation();
accounting.describe();

const employee1 = Department.createEmployee('Wilson');

console.log(employee1);
console.log(Department.fiscalYear);

// Creates a new object with the class propeties plus methods
/* const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe(); */
