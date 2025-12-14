//Anonymous function

//Anonymous function is a function which don't have name and function is assignmend to an variable
let add=function(a,b){
    return a+b;
}

console.log(add(2,3));

console.log(`value of add is: ${add(2,3)}`);
console.log(`typeof of add is: ${typeof(add)}`);

//IIFE --Imideatly invoked function expression
// Syntax:(function())()
(function(a,b){
    console.log(`value of add is: ${a+b}`);
})(2,3)
