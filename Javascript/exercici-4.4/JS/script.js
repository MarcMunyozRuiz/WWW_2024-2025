function suma(operacion){
    let resultado;
    
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
    
    switch(operacion){
    case 1:
        resultado = Number(n1) + Number(n2)
        break;
    
    case 2:
        resultado = Number(n1) - Number(n2)
        break;
    
    
    case 3:
        resultado = Number(n1) * Number(n2)
        break;
    
    
    case 4:
        resultado = Number(n1) / Number(n2)
        break;
    
    }
    
    document.getElementById("resultado").innerHTML = resultado
    }