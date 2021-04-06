const MAYORIA_DE_EDAD = 18

let alex = {
		nombre: 'Alejandro',
		apellido: 'Hernandez',
		edad: 25
}

function esMayorDeEdad(persona){
		if(persona.edad > MAYORIA_DE_EDAD){
				var mensaje = 'Es mayor de edad'
		}else{
				var mensaje = 'Es menor de edad'
		}

		console.log(mensaje)
}

esMayorDeEdad(alex)
