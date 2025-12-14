let add=(a,b)=>{
    return a+b;
}
console.log(add(2,3));

let sadd=(a,b)=> a+b;


console.log(sadd(2,3));

//direct callback
((a,b)=>{
    console.log(a-b);

})(2,3);



