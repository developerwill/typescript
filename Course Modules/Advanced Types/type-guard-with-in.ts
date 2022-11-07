type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const e1: ElevatedEmployee = {
    name: 'Wilson',
    privileges: ['create-server'],
    startDate: new Date(),
};

function printEmployeeInformation(em: UnknownEmployee) {
    console.log('Name: ' + em.name);

    if ('privileges' in em) {
        console.log('Privileges: ' + em.privileges);
    }
    if ('startDate' in em) {
        console.log('Start date: ' + em.startDate);
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Erik', startDate: new Date() });
