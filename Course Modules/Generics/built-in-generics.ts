const names: Array<string> = [];
names.push('Wilson', 'Patricia');

console.log(names);

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is a string');
        //console.log('Is this done?');
    }, 2000);
});

promise.then((data) => {
    data.split(' ');
});
