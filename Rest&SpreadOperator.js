//rest operator...

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));


const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
}
console.log(sum(5, 5, 5, 2, 3));

//spread operator...    pode ser utilizado em strings, arrays, literal objects e objetos iteraveis
const multiply = (...args) => args.reduce((acc, value) => acc *value, 1)

const sum = (...rest) => {
   return multiply(...rest);
}
console.log(sum(5, 5, 5, 2, 3));


const str = 'DIO';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);


const str = 'DIO';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

logArgs(...arr);


const str = 'DIO';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = arr.concat([5, 6, 7]);

console.log(arr2);


const str = 'DIO';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [...arr, 5, 6, 7];

console.log(arr2);


const str = 'DIO';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [5, 6, 7];

const arr3 = [...arr, ...arr2, 8, 9, 0];

console.log(arr3);


const str = 'DIO';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arrClone = [...arr];

const obj = {
    test: 123
}

const obj2 = {
    ...obj,
    test2: 'hello'
}

console.log(obj2);