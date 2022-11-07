function merge<T extends object, U extends object>(objA: T, objB: U) {
    // Returns the intersection of T & U
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'wilson' }, { age: 30 });

console.log(mergedObj.age);
