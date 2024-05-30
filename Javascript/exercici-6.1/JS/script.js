function init(){
    let numero = document.getElementById("num").value
    let producto

    for (j=0; j<10; j++){
        producto = numero * j;
        document.getElementById("salida").innerHTML += `${numero} * ${j} = ${producto} <br>` ;
    
    } 

}

