function calculo() {
    let nota1;
    let result;
    nota1 = document.getElementById("nota1").value;
    if(nota1 < 0) {
        result = "No numeros negativos pisha";
    }
    else if (nota1 <= 10){
        result = "Ahí bien colega";
    }

    else {
        result = "Tas pasao"
    }

console.log(result)
document.getElementById("resultado").innerHTML = result
resultado.className = 'resultado'
}