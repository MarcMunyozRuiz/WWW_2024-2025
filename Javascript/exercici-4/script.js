function calculo() {
    let nota1;
    let result;
    nota1 = document.getElementById("nota1").value;
    if(nota1 >= 5) {
        result = "Aprobado :)";
    }
    else{
        result = "Suspendido :(";
    }

console.log(result)
document.getElementById("resultado").innerHTML = result
resultado.className = 'resultado'
}