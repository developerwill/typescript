type Admin = {
    name: string;
    privilages: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Wilson',
    privilages: ['create-server'],
    startDate: new Date(),
};
