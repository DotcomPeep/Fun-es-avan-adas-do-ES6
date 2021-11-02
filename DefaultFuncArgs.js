//lazy evaluation
function randomNumber () {
    return Math.random () * 10;
}

function multiply (a, b = randonMunber()) {
    return a * b;
}
console.log (multiply (5));





function multiply (a, b) {
    //b = b || 1;    ---Antigamente fazia-se assim
    return a * b;
}
console.log (multiply (5, 5));   //---console.log (multiply (5));