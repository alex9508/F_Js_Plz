let alex = {
		nombre: 'Alejandro',
		apellido: 'Hernandez',
		edad: 26
}
console.log(alex)

function cumpleanios (persona){
		persona.edad += 1
}

//cumpleanios(alex)

console.log(alex)

// PODEMOS VER QUE SI LE PASAMOS UN PARAMETRO ESTE SI LO MODIFICA


function oCumple (edad){
		edad += 1
}

oCumple(alex.edad)

console.log(alex)

// AQUI PODEMOS VER QUE AL PASARLE UN OBJETO A LA FUNCION "alex.edad"
// ESTE NO MODIFICA AL OBJETO 


function copyCumple(persona){
		return {
				...persona,
				edad: persona.edad + 1
		}
}

// LA DECLARACION (..."nombre-objeto") NOS PERMITE CREAR UN DUPLICADO
// EXACTO DEL OBJETO QUE ESTA DESPUES DE LOS TRES PUNTOS, ASI PODEMOS
// MODIFICAR EL OBJETO SIN AFECTAR AL ORIGINAL

let alexViejo = copyCumple(alex)

console.log("Alex mas Viejo")
console.log(alexViejo)

