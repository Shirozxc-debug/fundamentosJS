// Ejercicio 16: Boleta de compra con clasificación de cliente
function ejercicio16() {
    let nombre = "Jorge gonzales";
    let producto = "Microondas";
    let nombreMayusculas = nombre.toUpperCase();
    let productominus = producto.toLowerCase();
    let precio = 100000;
    if (precio >= 100000) {
        alert(`El cliente: ${nombreMayusculas} compra un ${productominus} que vale ${precio} 
            \nPero como es un cliente premium el precio final es: ${precio - (precio * 0.1)}`)
    } else if (precio >= 50000) {
        alert(`El cliente: ${nombreMayusculas} compra un ${productominus} que vale: ${precio}
            \nPero como es un cliente frecuente el precio final es: ${precio - (precio * 0.1)}`)
    } else {
        alert(`El cliente: ${nombreMayusculas} compra un ${productominus} que vale: ${precio}
            \nPero como es un cliente normal no tiene descuento`)
    }
};
// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)

// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

function ejercicio17(){
    let frase = "mE GusTa eScuCHar MùsIcA";
    let puntaje = 80;
    if (puntaje >= 100) {
        alert(`La frase transformada es: ${frase.toLowerCase()} y tiene: ${frase.length} carácteres 
        \nPuntaje 90 o mas: ¡Exelente!`)
    } else if (puntaje >= 70) {
        alert(`La frase transformada es: ${frase.toLowerCase()} y tiene: ${frase.length} carácteres 
        \nPuntaje 70 o mas: Bueno`)
    } else {
        alert(`La frase transformada es: ${frase.toLowerCase()} y tiene: ${frase.length} carácteres 
        \nPuntaje menor a 70: Insuficiente`)
    }
}
// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación

// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado

function ejercicio18() {
    let nombre = "Papelucho";
    let n1 = 2.9;
    let n2 = 7.0;
    let n3 = 6.7;
    let promedio = (n1 + n2 + n3) / 3;
    let nombreMayus = nombre.toUpperCase();
    if (promedio >= 6) {
        alert(`El estudiante ${nombreMayus} está Destacado.
            \nPromedio: ${promedio}.
            \nlargo nombre: ${nombre.length}`)
    } else if (promedio >= 4) {
        alert(`El estudiante ${nombreMayus} está Aprobado.
            \nPromedio: ${promedio}.
            \nlargo nombre: ${nombre.length}`)
    } else {
        alert(`El estudiante ${nombreMayus} está Reprobado.
            \nPromedio: ${promedio}.
            \nlargo nombre: ${nombre.length}`)
    }
}

// Además:
// Contar la cantidad de caracteres del nombre

// Mostrar:
// Nombre en mayúsculas
// Cantidad de caracteres del nombre
// Promedio
// Estado final

// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

function ejercicio19() {
    let estudiante = "Manuel Pérez";
    let no1 = 7.0;
    let no2 = 6.2;
    let no3 = 5.8;
    let no4 = 4.5;
    let no5 = 3.9;
    let promedio = (no1 + no2 + no3 + no4 + no5) / 5;
    let estudianteMayusc = estudiante.toUpperCase();
    if (promedio >= 6.5) {
        alert(`El estudiante ${estudianteMayusc} Es sobresaliente.
            \nEl promedio es: ${promedio}.
            \nTiene ${estudiante.length} carácteres`)
    } else if (promedio >= 6.0) {
        alert(`El estudiante ${estudianteMayusc} Tiene muy buen rendimiento.
            \nEl promedio es: ${promedio}.
            \nTiene: ${estudiante.length} carácteres`)
    } else if (promedio >= 5.0) {
        alert(`El estudiante ${estudianteMayusc} Tiene buen rendimiento.
            \nEl promedio es: ${promedio}.
            \nTiene: ${estudiante.length} carácteres`)
    } else if (promedio >= 4.0) {
        alert(`El estudiante ${estudianteMayusc} Es suficiente.
            \nEl promedio es: ${promedio}.
            \nTiene: ${estudiante.length} carácteres`)
    } else {
        alert(`El estudiante ${estudianteMayusc} Es Insuficiente.
            \nEl promedio es: ${promedio}.
            \nTiene: ${nombre.length} carácteres`)
    }
}

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento --> else if
// ≥ 5.0 → Buen rendimiento --> else if
// ≥ 4.0 → Suficiente --> else if
// < 4.0 → Insuficiente --> else

// Además:

// Mostrar la cantidad de caracteres del nombre

// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

function ejercicio20() {
    let nombre = "gAbiNEte"
    let producto = 200000;
    let descuento = producto * 0.15;
    if (producto >= 200000) {
        alert(`El producto es: ${nombre.toLowerCase} y su largo es: ${nombre.length} \nEl precio original es: ${producto}
            \nY su precio final es: ${producto - (descuento)} \nEs un producto de lujo con un 15%`);
    } else if (producto >= 100000) {
        alert(`El producto es: ${nombre.toLowerCase} y su largo es: ${nombre.length} \nEl precio original es: ${producto}
            \nY su precio final es: ${producto - (descuento)} \nEs un producto premium con un 15%`);
    } else if (producto >= 50000) {
        alert(`El producto es: ${nombre.toLowerCase} y su largo es: ${nombre.length} \nEl precio original es: ${producto}
            \nY su precio final es: ${producto - (producto * 0.10)} \nEs un producto estandar con un 10%`);
    } else if (`producto >= 20000`) {
        alert(`El producto es: ${nombre.toLowerCase} y su largo es: ${nombre.length} \nEl precio original es: ${producto}
            \nEs un producto económico y no tiene descuento`);
    } else {
        alert(`El producto es: ${nombre.toLowerCase} y su largo es: ${nombre.length} \nEl precio original es: ${producto}
            \nEs un producto básico y no tiene descuento`);
    }
}

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación

// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

function ejercicio21() {
    let frase = "Me gusta eschuchar musica mientras estudio"
    let puntaje = 90;
    if (puntaje >= 90) {
        alert(`La frase "${frase.toUpperCase()}" 
            \nTiene un largo de ${frase.length} caracteres
            \nY un punhtaje de ${puntaje} puntos, por lo tanto es excelente.`)
    } else if (puntaje >= 80) {
        alert(`La frase "${frase.toUpperCase()}" \nTiene un largo de ${frase.length} caracteres 
        \nY un puntaje de ${puntaje} puntos, por lo tanto es muy bueno.`)
    } else if (puntaje >=70) {
        alert(`La frase "${frase.toUpperCase()}" \nTiene un largo de ${frase.length} caracteres 
        \nY un puntaje de ${puntaje} puntos, por lo tanto es bueno.`)
    } else if (puntaje >= 60) {
        alert(`La frase "${frase.toUpperCase()}" \nTiene un largo de ${frase.length} caracteres 
        \nY un puntaje de ${puntaje} puntos, por lo tanto es una frase regular.`)
    } else {
        alert(`La frase "${frase.toUpperCase()}" \nTiene un largo de ${frase.length} caracteres 
        \nY un puntaje de ${puntaje} puntos, por lo tanto es una frase deficiente.`)
    }
}

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:

// 30 → Muy larga

// 20 → Larga

// 10 → Mediana

// ≤ 10 → Corta