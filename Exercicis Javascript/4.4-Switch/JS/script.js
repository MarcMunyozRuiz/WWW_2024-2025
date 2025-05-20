function calculo(operacion){
   
    let result;
    
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

   switch(operacion){
    case 1:
        result = Number(num1) + Number(num2)
        break;

    case 2:
        result = Number(num1) - Number(num2)
        break;

    case 3:
        result = Number(num1) * Number(num2)
        break;

    case 4:
        result = Number(num1) / Number(num2)
        break;   
        
   }

    console.log(result)
    document.getElementById("resultado").innerHTML = result
    
}