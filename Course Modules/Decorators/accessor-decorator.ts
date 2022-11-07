function Log(target: any, propertyName: string | symbol) {
    console.log(`Property decorator`);
    console.log(target, propertyName);
}

function Log2(target: any, name: string, description: PropertyDescriptor) {
    console.log(target);
    console.log(name);
    console.log(description);
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

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}
