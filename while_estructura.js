let alex = {
		nombre: 'alex',
		apellido: 'Hernandez',
		edad: 25,
		peso: 75
}


console.log(`Al inicio del año ${alex.nombre} pesa ${alex.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANNIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const COME_MUCHO = () => Math.random() < 0.3
const HACE_DEPORTE = () => Math.random() < 0.4

const META = alex.peso - 3

let dias = 0

while(alex.peso > META){
		if(COME_MUCHO()){
				aumentarDePeso(alex)
		}
		if(HACE_DEPORTE()){
				adelgazar(alex)
		}
		dias++
}

console.log(`Pasaron ${dias} hasta que ${alex.nombre} adelgazo 3kg`)

