let x = 4, y = '4'

console.log(x)
console.log(y)

// COMPARACION ABSTRACTA

// apesar de comparar un numero con un string nos devuelve true
// por que tienen el mismo digito

let z = x == y
console.log(z)


// COMPARACION ESTRICTA

// al contrario de la pasada comparacion esta si se fija en el tipo de dato
// y ambos valores tienen que ser del mismo tipo


let z1 = x === y
console.log(z1)


/* *********************************************** */

let alex = {
		nombre: 'Alex'
}

let otraPersona = {
		nombre: 'Alex'
}

console.log(alex == otraPersona)

console.log(alex === otraPersona)

// AL COMPARAR OBJETOS COMPARAR QUE EL ESPACIO DE MEMORIA SEA EL MISMO
// POR LO TANTO AUN QUE TENGAN LAS MISMAS PROPIEDADES, NO VAN A SER IGUALES

let sePersona = alex

console.log(sePersona == alex)
console.log(sePersona === alex)
// EN ESTE CASO DEVUELVE VERDADERO POR QUE LO ESTAMOS APUNTANDO A LA MISMA 
// REFERENCIA




