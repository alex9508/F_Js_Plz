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

function imprimirProfesion(persona){

		console.log(`${persona.nombre} es:`)
		if(persona.ingeniero){
				console.log('Ingeniero')
		}

		if(persona.radiologo){
				console.log('Radiologo')
		}

		if(persona.cantante){
				console.log('Cantante')
		}

		if(persona.programador){
				console.log('Programador')
		}

		if(persona.dj){
				console.log('Dj')
		}
		
		if(persona.guitarrista){
				console.log('Guitarrista')
		}
}

imprimirProfesion(alex)


/* ************************
 *        DESAFIO
 * ***********************/

function mayorDeEdad(persona){
		if(persona.edad > 18){
				
				console.log(`${persona.nombre} es mayor de edad !!`)
		}else{
				console.log(`${persona.nombre} no es mayor de edad !!`)
		}
}

mayorDeEdad(alex)


// CODIGO DESAFIO COMPAÑEROS


function  imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es ${persona.edad >= 18 ? 'mayor' : 'menor'} de edad`)
}

imprimirSiEsMayorDeEdad(alex)




