// Symbols

const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
}

console.log(obj);


// Well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator] ();

while (true) {
    let {value, done} = it.next()
    if (done) {
        break;
    }
    console.log(value);
}


const arr = [1, 2, 3, 4];

for (let value of arr) {
    console.log(value);
}


const arr = [1, 2, 3, 4];
const str = 'DIO';

for (let value of str) {
    console.log(value);
}



const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
               
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Generators

function* hello() {
    console.log('Hello');
    yield 1;
    
    console.log('From');
    yield 2;

    console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());


function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
