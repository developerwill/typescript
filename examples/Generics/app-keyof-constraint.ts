function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Wilson' }, 'name');
//extractAndConvert({ name: 'Wilson' }, 'age'); // It throws an error because the property doesn't exist
