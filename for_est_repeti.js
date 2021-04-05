let alex = {
		nombre: 'alex',
		apellido: 'Hernandez',
		edad: 25,
		peso: 75
}


console.log(`Al inicio del año ${alex.nombre} pesa ${alex.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANNIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(let i = 1; i <= DIAS_DEL_ANNIO; i++){
		let random = Math.random()

		if(random < 0.25){
				aumentarDePeso(alex)
		}else if(random < 0.5)
		{
				adelgazar(alex)
		}
}


console.log(`Al final del año ${alex.nombre} pesa ${alex.peso.toFixed(1)}kg`)

