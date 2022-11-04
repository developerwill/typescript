type combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-string';

function combine(
    input1: combinable,
    input2: combinable,
    resultConversion: conversionDescriptor
) {
    let result: combinable;

    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number'
    ) {
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
