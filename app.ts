function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-string') {
    let result: string | number;

    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combinedStrinAges = combine('30', '26', 'as-number');
console.log(combinedStrinAges);

const combineNames = combine('Wilson ', 'Gomes', 'as-string');
console.log(combineNames);
