type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result1 = add(1, 5);
const result2 = add('Hello', 5);
result2.split(' ');
