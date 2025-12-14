function f1(){
    console.log("Inside f1()");
}

function f1(n1,n2){
    console.log("Inside f2(n1,n2)");

}

f1(2,3);
f1();

//Js doesn't support function overloading
//the last function overrides the 1st function
