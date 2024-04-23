    function concatenar() {
    let cadena1 = document.getElementById("cad1ul").value;
    let cadena2 = document.getElementById("cad2ul").value;

    //juntamos las cadenas
    let resultado = cadena1 + cadena2;

    //mostramos el resultado por pantalla

    document.getElementById("resultul").innerHTML = resultado
}

function longitud() {
    let cad1 = document.getElementById("cad1ur").value;

    document.getElementById("resultur").innerHTML = cad1.length
}

function reemplazar() {
    let cadena1 = document.getElementById("cad1dl").value;
    let cadena2 = document.getElementById("cad2dl").value;
    let cadena3 = document.getElementById("cad3dl").value;

    console.log(cadena1.replace(cadena2, cadena3))
    document.getElementById("resultdl").innerHTML = (cadena1.replace(cadena2 , cadena3))
}

function dividir() {
    let cadena1 = document.getElementById("cad1dr").value;
    let cadena2 = document.getElementById("cad2dr").value;

    document.getElementById("resultdr").innerHTML = (cadena1.split(cadena2))

}