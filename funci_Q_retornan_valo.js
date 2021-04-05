let alex = {
		nombre: 'Alex',
		apellidos: 'Hernandez',
		edad: 25,
		ingeniero: false,
		radiologo: true,
		cantante: false,
		programador: true,
		dj: false,
		guitarrista: false
}

const MAYORIA_DE_EDAD = 18

function EsMayor(persona){
		return persona.edad >= MAYORIA_DE_EDAD
}


/* ****************************************************
 *                 ARROW FUNCTIONS
 * ****************************************************/

const ES_MAYOR_DE_EDAD = ({ edad }) => edad >= MAYORIA_DE_EDAD

// LO QUE HACEMOS AQUI ES PASARLE EL PARAAMETRO QUE NOS INTERESA CONOCER
// EN ESTE CASO ES SOLO LA EDAD, COMO ES UNA ARROW VA ENTRE PARENTESIS
// Y DESPUES LAS LLAVES

function imprimirSiEsMayor(persona){
		if(ES_MAYOR_DE_EDAD(persona)){
				console.log(`${persona.nombre} es mayor de edad`)
		}else{
				console.log(`${persona.nombre} es menor de edad`)
		}
}

console.log(imprimirSiEsMayor(alex))


function permitirAcceso(persona){
		if(!ES_MAYOR_DE_EDAD(persona)){
				console.log('ACCESO DENEGADO !!')
		}else{
				console.log('ACCESO OTORGADO !!')
		}
}

console.log(permitirAcceso(alex))

/* ****************************************************
 *                   DESAFIO 
 * ****************************************************/

const ACCESOS = persona => {
		if(!ES_MAYOR_DE_EDAD(persona)){
				console.log('ACCESO DENEGADO !!')
		}else{
				console.log('ACCESO OTORGADO !!')
		}
}

console.log(ACCESOS(alex))



/* ****************************************************
 *               DESAFIO COMPAÑEROS 
 * ****************************************************/


// const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad});

/*PODEMOS VER QUE AQUI LA CONSTANTE esMenorDeEdad PIDE UN PARAMETRO
 * EN ESPECIFICO EN ESTE CASO SERIA "edad" Y LA FUNCION DEVUELVE
 * TRUE SI ES MENOR DE EDAD Y FALSE SI ES MAYOR, PARA ASI DESPUES
 * PASARLE ESE PARAMETRO A LA COMPARACION E IMPRIMIR EL TEXTO */

/* -------------------------------------------------------------- */ 

// const acceso = ({ edad }) => edad < MAYORIA_DE_EDAD ?  'ACCESO DENEGADO' : 'Todo bien'

/*PODEMOS VER QUE EN ESTE CASO SE OCUPO EL VALOR TERNARIO, TAMBIEN MANDO
 * A PEDIR UN VALOR ESPECIFICO, EN ESTE CASO SE EVALUA QUE LA EDAD
 * SEA MENOR QUE "MAYORIA_DE_EDAD", ES VERDAD SE ACTIVA EL SIMBOLO
 * "?" Y SI ES FALSO SE ACTIVA ":" */


