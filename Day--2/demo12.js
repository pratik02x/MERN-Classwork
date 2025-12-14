// higher order function

//this takes an argument as function

function arithmeticExecuter(fn){
    let res=fn(20,10);
    console.log(`res is: ${res}`);
}

arithmeticExecuter((a,b)=> a+b);
arithmeticExecuter((a,b)=> a-b);
arithmeticExecuter((a,b)=> a*b);
arithmeticExecuter((a,b)=> a/b);