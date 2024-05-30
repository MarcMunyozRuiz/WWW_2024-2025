function init_mitjana(){
    //leer valores del formulario//
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    a = Number(a);
    b = Number(b);
    //llamada a función Mitjana//
    let r = mitjana(a,b);
    //mostrar resultador por pantalla//
    document.getElementById("resultado").innerHTML = r
}
//transformar parametros a numeros
function mitjana (n1, n2){
    let calculo = (n1 + n2)/2;
    return calculo;

}
