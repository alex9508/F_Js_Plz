let alex = {
		nombre: 'Alejandro',
		apellidos: 'Hernandez',
		altura: 170,
		cantidadDeLibros: 376
}


let pedro = {
		nombre: 'Pedro',
		apellidos: 'Perez',
		altura: 183,
		cantidadDeLibros: 348 
}

let juana = {
		nombre: 'Juana',
		apellidos: 'Lopez',
		altura: 149,
		cantidadDeLibros: 704
}


let karen = {
		nombre: 'Karen',
		apellidos: 'Suarez',
		altura: 167,
		cantidadDeLibros: 389
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

//console.log(personas.filter(esAlta))

/* **********************************
 *             DESAFIO
 * **********************************/

const ESTATURA_BAJA = 170
const esBaja = ({ altura }) => altura < ESTATURA_BAJA 
//console.log(personas.filter(esBaja))


/* TRANSFORMANDO UN ARREGLO */

const PASAR_ALTURA_MTS = persona => ({ 
		...persona,
		altura: persona.altura / 100
})

let personasEnMts = personas.map(PASAR_ALTURA_MTS)

//console.log(personasEnMts)
//console.log(personas)


/* REDUCIR UN ARREGLO */

//let acumulador = 0
//
//for (let i = 0; i < personas.length; i++){
//		acumulador += personas[i].cantidadDeLibros
//}

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

let totalDeLibros = personas.reduce(reducer,0)

console.log(`En total todos tienen ${totalDeLibros} libros`)



