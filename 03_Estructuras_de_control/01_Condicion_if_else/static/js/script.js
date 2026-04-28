console.log("Conexión exitosa con JS...");

/*
=================================
1. ¿Qué es una condición en JS?
=================================
Una condición nos permite tomar decisiones en el
código. Separando dos caminos el si(if) y el no(else).

Estructura básica: (Sintaxis --> Reglas del Lenguaje de programación)

if (condición) {
    // Código que se ejecuta si la condición es falsa.
}

else{
    //Código que se ejecuta si la condición es falsa. 
}
*/

// Ejemplo 1: (numérico)
let edad = 18;

if (edad == 20) { //Condicion Si
    console.log("Eres mayor de edad");
}
// Ejemplo 2: Dos caminos posibles
let temperatura = 10

if (temperatura > 20) {
    console.log("Hace calor");
} else { //Condicion No
    console.log("Hace frío");
}

// Ejemplo 3: IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;

if (nota >= 6.0) { //Primera condición
    console.log("Exelente!");
} else if (nota >= 4.0) { //Segunda condición
    console.log("Aprobado");
} else { //Valor si no cumple anteriores
    console.log("Reprobado, estudia más!");
}

// Ejemplo 4: Condiciones con STRINGS
let nombre = "Matias";

// Compraración exacta (===)
if (nombre === "Matias") {
    console.log("Hola " + nombre)
} else {
    console.log("Tu no eres Matias")
}

/*
OPERADORES DE COMPARACIÓN

> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
// Ejemplo de distinto
let num = 5;
let num2 = 10;
if (num !== num2) {
    console.log(`El número ${num} es distinto que ${num2}`)
} else {
    console.log("Son iguales!")
}