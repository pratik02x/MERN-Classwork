//default argument functions
//here if you can't pass the value of any parameter then it will take default value
function f1(a=1,b=2,c=3){
    console.log(`value of a,b,c is${a},${b},${c} `)
}

f1(10,20,30)//10 20 30 
f1(10,20)// 10 20 3
f1()//1 2 3
f1(10,20,30,40,50) //10 20 30