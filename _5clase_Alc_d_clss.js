let nombre = 'Alejandro'
// Variable de alcanse global

console.log(`Nombre normal seria: ${nombre}`)

function imprimirNombreEnMayusculas(n){
		
		// La variable "n" es de alcanse local, solo servira
		// dentro de esta function

		n = n.toUpperCase()
		console.log(`Nombre en mayusculas seria: ${n}`)
}

imprimirNombreEnMayusculas(nombre)

imprimirNombreEnMayusculas('juan');


