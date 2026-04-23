console.log("Consexión exitosa con JS...");

// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendré: ${edad + 5}
        \nHace 10 años tenía: ${edad - 10}`);
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento(){
    let producto = 25000;
    let descuento = 0.20; //20%
    let montodescuento = producto * descuento;
    let preciofinal = producto - montodescuento;
    alert(`El precio es de: $${producto} el descuento $${montodescuento}
        \nel total es: $${preciofinal}`);
}
// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas(){
    let nota1 = 7.0
    let nota2 = 5.5
    let nota3 = 6.4
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`Son 3 notas ${nota1}, ${nota2} y ${nota3}
    \nEl promedio de estas es: ${promedio}
    \nY el redondeado seria ${Math.round(promedio)}`);
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura(){
    let Horas = 45;
    let valorHoras = 8000;
    alert(`Un trabajador gana ${valorHoras} por hora y trabaja ${Horas} horas
        \nSu sueldo es de ${Horas * valorHoras}
        \Y si trabajara 5 horas extra trabajaria ${Horas + 5} horas
        \nY su sueldo seria ${Horas + 5 * valorHoras}`);
};

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo(){
    let valorHora = 8000;
    let cantidadHora = 45;
    let sueldo = valorHora * cantidadHora;
    cantidadHora += 5; // += para incrementar o acumular
    let sueldoNuevo = valorHora * cantidadHora;
    alert(`sueldo actual: $${sueldo}
        \nSueldo nuevo con incremento: $${sueldoNuevo}`);
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function Operaciones() {
    let numero1 = 4 ;
    let numero2 = 3;
    let division = numero1 / numero2
    let resto = numero1 % numero2
    alert(`La division es: ${division}
        \nY el resto es: ${resto}`);
        console.log("El resultado de dividir " + numero1 + " entre " + numero2 + "");
};

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function coparacionNumero() {
    let numero1 = 10;
    let numero2 = 3;
    alert(`¿Numero1 es mayor que numero 2?: ${numero1 > numero2}
        \nEl numero es igual a 10?: ${numero1 === 10}`);
};

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function calculoPoblacion(){
    let poblacion = 2e6;
    alert(`La población es de ${poblacion}
        \nSe dividiran en grupos de 4
        \nEl resultado es de ${poblacion}`)
};

// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function potenciaCalculo(){
    let num1 = 3;
    let num2 = 4;
    let potencia = num1 ** num2;
    let multi = potencia * 2;
    alert(`el resultado da 3 elevado a 4 es ${potencia}
        \nLa multiplicaciòn de la potencia por 2 es ${potencia * 2}
        \nEl resultado final menos 10 es: ${multi - 10}`)
};

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function DadoAleatorio(){
    let dado = Math.floor(Math.random() * 6) + 1;
    alert(`Tirar Dados: ¡${dado}!
    \n¿Es mayor que 4?: ${dado >= 4}`);
};
