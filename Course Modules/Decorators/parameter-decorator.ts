function Log(target: any, propertyName: string | symbol) {
    console.log(`Property decorator`);
    console.log(target, propertyName);
}

function Log2(target: any, name: string, description: PropertyDescriptor) {
    console.log('Accessor get decorator');
    console.log(target);
    console.log(name);
    console.log(description);
}

function Log3(
    target: any,
    name: string | symbol,
    description: PropertyDescriptor
) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(description);
}

function Log4(target: any, name: string | symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Must be positive value');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
