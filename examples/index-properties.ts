interface ErrorContainer {
    label: string;
    [key: string]: string; // Key of type string with the value of string
}

const errorBag: ErrorContainer = {
    label: 'email',
    email: 'Not valid email!',
    username: 'Must start with a capital character!',
};
