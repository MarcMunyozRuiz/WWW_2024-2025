function calcula(){
   
    let num = document.getElementById("numero").value;

    document.getElementById("resultado").innerHTML = "";

    for (j=0; j<10; j++){
        let result = num * j;
        document.getElementById("resultado").innerHTML += `${num} x ${j} = ${result} <br>` ;

    
    }
}

