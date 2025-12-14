function f1(){
    console.log("Inside f1()");
}

function f2(n1,n2){
    console.log("Insode f2()");
    console.log(`value of n:${n1} ,type of n ${typeof(n1)}`);
    console.log(`value of n:${n2} ,type of n ${typeof(n2)}`);
}

f1(); //Inside f1()
f1(2);//Inside f1()
f2(2,3); //Insode f2()
        //value of n:2 ,type of n number
        //value of n:3 ,type of n number
f2(4,true);//Insode f2()
        //value of n:4 ,type of n number
        //value of n:true ,type of n boolean
f2(2);//Insode f2()
      //value of n:2 ,type of n number
      //value of n:undefined ,type of n undefined
      