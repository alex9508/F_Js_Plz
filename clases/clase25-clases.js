class persona {
		constructor(nombre, apellido, altura){
		this.nombre = nombre,
		this.apellido = apellido,
		this.altura = altura
		}

		saludar(){
				console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
		}

		esAlto(){
				return this.altura > 1.8
		}
}


let alex = new persona('Alejandro', 'Hernandez', 1.70)
let pedro = new persona('Pedro', 'Perez', 1.73)
let rosa = new persona('Rosa', 'Rodriguez', 1.60)
let karen = new persona('Karen', 'Hernandez', 1.83)

console.log(alex.saludar())
console.log(alex.esAlto())
console.log(karen.saludar())
console.log(karen.esAlto())



/* PAR HEREDAR LOS DATOS DE UNA CLASE SE PONE 
*  - class "nombre de la clase" extends "clase padre que va a 
*  heredar" 
* */

class Desarrollador extends persona {
		constructor(nombre, apellido, altura){
				super(nombre,apellido,altura)
		}
		saludar(){
				console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
		} 
}

let alvaro = new Desarrollador('Alvaro', 'Juarez', 1.65)
console.log(alvaro.saludar())
console.log(alvaro.esAlto())



