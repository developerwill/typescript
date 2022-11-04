//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById(
    'user-input'
)! as HTMLInputElement;

userInputElement.value = 'Hi there!';

/* if(userInputElement) {
    (userInputElement as HTMLInputElement).value = "Hi there!"
} */
