console.log("Conexión con js correcta...");
/*
Datos: Tipo texto(String)
1.- Concatenación de texto con el signo +
Podemos unir texto y variables
*/

//Concatenación: unir texto y/o variables.
const nombre = "Matias";
const apellido = "Santelices";
//Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/*
2.-Ver el tipo de dato (typeof)
*/
console.log("La varible nombre es un tipo de dato: " + typeof nombre);

// Template literals (forma moderna para concatenar)
console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

// Mostrar el largo de un string(texto) - Contar los caracteres.
// .length --> Para contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

// Crear una frase y contar sus caracteres
let frase = "Parangaricutirimícuaro"
console.log(`La frase ${frase} tiene ${frase.length} letras.`);

// Métodos comunes en JS para formatear texto
// Transformar texto en Mayúsculas .toUpperCase
let texto1 = "JaVaScriPT eS lo mejor";
console.log(texto1.toUpperCase());

// Transformar texto a minúscula
console.log(texto1.toLowerCase());

// Buscar un texto dentro de un string
let texto2 = "Leche, azúcar, peras, huevos, harina";
console.log(texto2.includes("peras")); //True

// Convertir una variable a texto
let telefono = 10475982;
let telefono_texto = String(telefono);
console.log(`Mi numero de teléfono_texto es de tipo ${typeof telefono_texto}`);