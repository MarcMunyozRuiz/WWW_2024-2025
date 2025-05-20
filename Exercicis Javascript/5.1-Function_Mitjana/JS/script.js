function init(){
   
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = Number(num1);
    num2 = Number(num2);
    let result = mitjana(num1, num2);

    document.getElementById("resultado").innerHTML = result;
}

function mitjana(num1, num2){
    let calculo = (num1 + num2) / 2;
    return calculo;
}