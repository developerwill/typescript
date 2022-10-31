function add(n1: number, n2: number, showResult: boolean) {
    if (showResult) return n1 + n2;
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;

const result = add(num1, num2, printResult);
console.log(`${result}`);
