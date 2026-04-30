console.log("Conexión exitosa con JS...");

// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Matias";
    alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let suma = 10+5;
    alert(`La suma es: ${suma}`)
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let resta = 22-10;
    alert(`La resta es: ${resta}`)
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let multiplicacion = 12*2;
    alert(`La multiplicación es ${multiplicacion}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
let nota1 = 6.3;
let nota2 = 5.5;
let nota3 = 5.3;
let promedio = (nota1 + nota2 + nota3) / 3
alert(`las notas son: ${nota1}, ${nota2} y ${nota3} 
    \nEl promedio es: ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 16;
    if (edad < 18) {
        alert(`Es menor de edad`)
    } else {
        alert(`Es mayor de edad`)
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let num1 = 8;
    if (num1 % 2 === 0) {
        alert(`El número es par`)
    } else{
        alert(`El número no es par`)
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8(){
    let nota = 6.0;
    if (nota >= 4.0) {
        alert(`Aprobado!`)
    } else {
        alert(`Desaprobado`);
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
let precio = 20000;
let descuento = 0.10;
let preciofinal = precio - (precio * descuento)
alert(`Precio final con descuento: $${preciofinal}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let numero1 = 22;
    let numero2 = 15;
    if (numero1 > numero2) {
        alert(`el numero mayor es: ${numero1}`)
    } else {
        alert(`el numero mayor es: ${numero2}`)
    }
} 