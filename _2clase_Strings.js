/* Strings */ 

/* En el console vemos la forma de concatenar strings */
let nombre = 'Alejandro', apellidos = 'Hernandez';
//console.log(nombre + ' ' + apellidos);
console.log(`${nombre} ${apellidos}`);

/* La funcion toUpperCase nos ayuda a colocar todos los parametros del string en mayusculas */
let nombreMayusculas = nombre.toUpperCase() +' '+ apellidos.toUpperCase();
//console.log(nombreMayusculas);
console.log(`${nombre.toUpperCase()}`);


/* La funcion toLowerCase nos ayuda a colocar todos los parametros del string en minusculas */
let nombreMinusculas = nombre.toLowerCase() + ' ' + apellidos.toLowerCase();
//console.log(nombreMinusculas);
console.log(`${nombre.toLowerCase()} ${apellidos.toLowerCase()}`);


/* La funcion chartAt nos ayuda a poder seleccionar una letra del string con ayuda de su posicion */
let primeraLetraDelNombre = nombre.charAt(0);
console.log(primeraLetraDelNombre);

/* El atributo length nos ayuda a conocer la longitud de una variable, en este caso del string */
let longitudDeNombre = nombre.length;
console.log(longitudDeNombre);

/* Acceder a un substring */
let subString = nombre.substr(1, 2);
/* substr lleva como parametros donde queremos que inicie ejemplo el #1 y con una coma cuantos caracteres queremos
 * que tome ejemplo el #2, en este caso en mi string Alejandro tomaria los valores de "le" */
console.log(subString);

/* ************************** 
 *         DESAFIO
 * **************************/

/* Ocupamos la funcion charAt para seleccionar una letra y como parametro utilizamos una variable a la que se
 * le paso la funcion length para conocer la longitud de la variable y por ultimo se le coloco el -1 para 
 * que no hubiera un erro ya que length no cuenta al 0 y charAt si */

console.log(`La ultima letra de tu nombre es ${nombre.charAt(longitudDeNombre - 1)}`);

/* slice nos ayuda a devolver una copia de una parte en especifico del array o en este caso del string
 * Podemos ver que en este caso solo le estamos pasando un parametro, cuando a un slice se le coloca 
 * un valor negativo comienza el recorrido del final hacia el principio, en este ejemplo colocamos 
 * -1 lo cual solo nos devolvera el ultimo valor, si se hubiera colocado -2 nos devolveria los ultimos
 *  2 valores */

console.log(`La ultima letra de tu nombre es ${nombre.slice(-1)}`);

/* substr funciona muy parecido a slice si en lugar de darle un valor de inicio y uno de final solo colocamos
 * un valor negativo este comenzara el recorrido de atras hacia adelante */

console.log(`La ultima letra de tu nombre es ${nombre.substr(-1)}`);

