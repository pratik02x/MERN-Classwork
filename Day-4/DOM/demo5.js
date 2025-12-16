document.getElementById("text-input").addEventListener("input",function(){
    const inputtext=document.getElementById("text-input").value

    document.getElementById("display-text").innerText=inputtext;
});