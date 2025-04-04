function calculo() {
    let total = document.getElementById("total").value
    let customers = document.getElementById("customers").value
    let result = total / customers
    document.getElementById("result").innerHTML = `Heu de pagar ${result.toFixed(2)} € per persona`
}
