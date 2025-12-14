//declare a variables 
let n1=5;
const n2=2;

n1=7; //it can be reinitialized  or Mutable
n2=1; //can't reinitialized  or Immutable

console.log(`value of n1${n1} , type of n1 ${typeof(n1)}`);
console.log(`value of n1${n2} , type of n1 ${typeof(n2)}`);  //Uncaught TypeError: Assignment to constant variable.