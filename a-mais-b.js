var sumOld = function(a, b) {
    return a + b;
};
console.log(sum(5, 5));

//Arrow functions

var sum = (a, b) => a + b; /*=> a + b;{
    var x = 10;
    if (a > b) {
        return a + b;
    }
}*/
console.log(sum(5, 15));