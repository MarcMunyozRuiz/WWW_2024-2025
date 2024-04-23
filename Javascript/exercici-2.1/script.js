function xesc() {
    let total = document.getElementById("total").value
    let comensales = document.getElementById("comensales").value
    let result = total / comensales
    document.getElementById("result").innerHTML = `El total a pagar per persona es ${result.toFixed(2)} €`
    
}