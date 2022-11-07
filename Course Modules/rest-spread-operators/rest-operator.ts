const add = (...numbers: number[]) => {
    // Loops through the array and returns the accumulated result
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0); // Initial value
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
