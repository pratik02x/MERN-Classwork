//function aliase 
//it is alternative name give to the existing function
function add(n1,n2){
    console.log(`Addition is:${n1+n2}`);
    return n1+n2;
}

let myadd=add;
add(20,30);


console.log(`value of myadd ${myadd(2,3)}, type of myadd ${typeof(myadd)}`);

//imp
console.log(typeof NaN === "number"); //true
