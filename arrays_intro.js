let alex = {
		nombre: 'Alejandro',
		apellidos: 'Hernandez',
		altura: 170
}


let pedro = {
		nombre: 'Pedro',
		apellidos: 'Perez',
		altura: 183
}

let juana = {
		nombre: 'Juana',
		apellidos: 'Lopez',
		altura: 149
}


let karen = {
		nombre: 'Karen',
		apellidos: 'Suarez',
		altura: 167
}

let personas = [alex, pedro, juana, karen]

//console.log(personas)

//console.log('Seleccion individual')

//console.log(personas[0])

//console.log(personas[0].altura)

/* RECORRER EL ARREGLO */

//console.log('Recorriendo el arreglo')

//for(let i = 0; i < personas.length; i++){
//		let persona = personas[i]
//		console.log(`${persona.nombre} mide ${persona.altura}mts`)
//}


/* FILTRAR ELEMENTOS DEL ARREGLO */

const esAlta = ({ altura }) =>  altura > 180

console.log(personas.filter(esAlta))

/* **********************************
 *             DESAFIO
 * **********************************/

const ESTATURA_BAJA = 170
const esBaja = ({ altura }) => altura < ESTATURA_BAJA 
console.log(personas.filter(esBaja))
