var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

// Destructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = 
['Apple',
'Banana',
'Orange',
['tomato']
];
console.log(apple2, banana2, tomato2);



var obj = {
    name: 'Leo',
    props: {
        age: 26,
        favoriteColors: ['Black', 'red']
    }
}

var name = obj.name;
var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];

//Destructuring Assignment

var { name: name2 } = obj;
var { 
    props: { age: age2, favoriteColors: [color1, color2] }
} = obj;

console.log(name2, age2, color1);



var arr = [{ name: 'Apple', type: 'Fruit'}];
var obj = {
    name: 'Leo',
    props: {
        age: 26,
        favoriteColors: ['Black', 'red']
    }
}

var fruit1 = arr[0].name;

//Destructing Assignment

var [{ name: fruitName }] = arr;

console.log(fruitName);