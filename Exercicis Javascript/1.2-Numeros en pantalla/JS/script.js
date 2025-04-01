let num1 = 4;
let num2 = 6;
let result;


result = num1 + num2;
salida = `La suma de ${num1} y ${num2} es ${result}`;
document.getElementById("result1").innerHTML = salida;

result = num1 - num2;
salida = `La resta de ${num1} y ${num2} es ${result}`;
document.getElementById("result2").innerHTML = salida;

result = num1 * num2;
salida = `La multiplicación de ${num1} y ${num2} es ${result}`;
document.getElementById("result3").innerHTML = salida;

result = num1 / num2;
salida = `La división de ${num1} y ${num2} es ${result}`;
document.getElementById("result4").innerHTML = salida;

result = num1 ** num2;
salida = `${num1} elevado a ${num2} es ${result}`;
document.getElementById("result5").innerHTML = salida;

result = num1 % num2;
salida = `El resto de la división de ${num1} y ${num2} es ${result}`;
document.getElementById("result6").innerHTML = salida;

result = ++num1;
salida = `El incremento es ${result}`;
document.getElementById("result7").innerHTML = salida; 

