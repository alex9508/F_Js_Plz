let nombres = {
		nombre: 'Alejandro',
		apellido: 'Hernandez',
		edad: 26
}

/* UN OBJETO SE CONFORMA POR ATRIBUTOS QUE PUDEN DENOMINARSE COMO 
 * UNA CLAVE Y UN VALOR, EJEMPLO: "nombre:" seria la clave y 
 * "Alejandro" es su valor */

console.log(nombres)

console.log(nombres.nombre)

function imprimirMayusculas({nombre}){
		console.log(nombre.toUpperCase())
}
// EN ESTA FUNCION COLOCAMOS COMO PARAMETRO SOLO LOS ATRIBUTOS
// QUE NOS INTERESAN INGRESAR, EN ESTE CASO SOLO EL NOMBRE

imprimirMayusculas(nombres)

//PODEMOS MANDAR A LLAMAR A LA FUNCION Y NO PASARLE NINGUN ATRIBUTOS
//YA ESTABLECIDO, EJEMPLO:

imprimirMayusculas({nombre: 'Chona'})


/* **************************************
 *        DESESTRUCTURAR OBJETOS
 * **************************************/


function imprimirMayusculas2(persona){

		let { nombre } = persona
		console.log(nombre.toUpperCase())
}

imprimirMayusculas2(nombres)

/* *************************************
 *              DESAFIO
 * *************************************/

let altez = {
		nombre: 'Alejandro',
		apellido: 'Hernandez',
		edad: 26
}


let pedro = {
		nombre: 'Pedro',
		apellido: 'Perez',
		edad: 16
}

function desafioObjetos(dNombre){
		console.log(`Hola, me llamo ${dNombre.nombre} ${dNombre.apellido} y tengo ${dNombre.edad} años`)
}

desafioObjetos(altez)
desafioObjetos(pedro)
