/* ***************************************
 *              NUMEROS
 * ***************************************/

/* AUMENTAR EL VALOR DECLARADO ***************/

let edad = 26;

//edad = edad + 1;
edad += 1; 
// Lo mismo que la primera declaracion

/* DISMINUIR EL VALOR DECLARADO ****************/

var peso = 90;

//peso = peso - 2;
peso -= 2;

/* MULTIPLICAR EL VALOR DECLARADO ***************/

let precioVino = 200.3;
let total = precioVino * 3;
console.log(total);

// Para poder redondear un valor en decimales
// podemos ocupar la funcion Math.round, 
// multiplicando el valor x 100 x "las veces que
// lo vamos a multiplicar", entre 100, ejemplo:

let totalSinDecimales = Math.round(precioVino * 100 * 3)/100;
console.log(totalSinDecimales);

// Para poder elejir cuantos decimales mostrar
// ocupariamos la funcion "variable".toFixed(# de decimales)

let totalConDosDecimales = totalSinDecimales.toFixed(2);
console.log(totalConDosDecimales);

// Ahora para transformar el nuevo valor string que se creo
// de nuevo a numero ocuparemos la funcion parseFloat, en este
// caso por que el valor que necesitamos es flotante(con decimales)
// parse significa transformar

let deNuevoANumero = parseFloat(totalConDosDecimales);
console.log(deNuevoANumero);

/* DIVIDIR EL VALOR DECLARADO ***************/

let pizza = 8;
let persona = 2;
let cantidadDePizzaPorPersona = pizza / persona;
console.log(cantidadDePizzaPorPersona);



