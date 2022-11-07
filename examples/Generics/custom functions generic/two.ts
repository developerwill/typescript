interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value';

    if (element.length === 1) {
        descriptionText = `Got ${element.length} element.`;
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }

    return [element, descriptionText];
}

//console.log(countAndPrint('Hi there!'));
console.log(countAndPrint(['Cooking', 'Sports']));
