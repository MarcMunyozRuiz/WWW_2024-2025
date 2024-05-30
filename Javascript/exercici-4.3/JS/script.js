function calculo() {
    let nota1;
    let result;
    nota1 = document.getElementById("nota1").value;
    if( nota1 < 5) {
        result = "Suspendido";
    }
    else if (nota1 < 6) {
        result = "Suficient";
    }

    else if (nota1 < 7) {
        result = "Bé";
    }

    else if (nota1 < 9) {
        result = "Notable";
    }

    else {
        result = "Excelent";
    }

console.log(result)
document.getElementById("resultado").innerHTML = result;
}