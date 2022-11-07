class DataStorage<T extends string | number> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Wilson');
textStorage.addItem('Patricia');
textStorage.removeItem('Patricia');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(12);

console.log(numberStorage.getItems());

//const booleaTest = new DataStorage<boolean>();
